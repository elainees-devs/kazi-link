import { Resend } from "resend";
import { IEmailPayload, IAttachment } from "../types/interfaces.types";
import { RESEND_API_KEY } from "../config/resend";

/**
 * EmailService handles composing and sending emails via Resend
 */
export class EmailService {
  private resend: Resend;
  private fromEmail: string;

  constructor() {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not defined");
    }
    this.resend = new Resend(RESEND_API_KEY);
    this.fromEmail = process.env.RESEND_FROM_EMAIL || "";
    if (!this.fromEmail) {
      throw new Error("RESEND_FROM_EMAIL is not defined");
    }
  }

  /**
   * Sends an email using Resend API
   * @param payload IEmailPayload (to, subject, html, attachments)
   */
  async sendEmail(payload: IEmailPayload): Promise<any> {
    try {
      const { to, subject, html, attachments } = payload;

      const formattedAttachments = attachments?.map((att: IAttachment) => ({
        filename: att.filename,
        content: att.content instanceof Buffer ? att.content.toString("base64") : att.content,
        contentType: att.mimeType,
      }));

      const emailOptions = {
        to,
        from: this.fromEmail,
        subject,
        html,
        attachments: formattedAttachments,
      };

      const result = await this.resend.emails.send(emailOptions);
      return result;
    } catch (error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  }
}