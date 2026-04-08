import nodemailer from "nodemailer";
import { IEmailPayload, IAttachment } from "../types/interfaces.types";

const {
	SMTP_HOST,
	SMTP_PORT,
	SMTP_USER,
	SMTP_PASS,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
	throw new Error("SMTP configuration is missing in environment variables");
}

export const transporter = nodemailer.createTransport({
	host: SMTP_HOST,
	port: Number(SMTP_PORT),
	secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
	auth: {
		user: SMTP_USER,
		pass: SMTP_PASS,
	},
});

/**
 * Send an email using nodemailer
 * @param {IEmailPayload} payload - Email payload with to, subject, html, attachments
 * @returns {Promise<any>} - Result of the sendMail operation
 */
export async function sendMail(payload: IEmailPayload): Promise<any> {
	const { to, subject, html, attachments } = payload;

	// Format attachments for nodemailer
	const formattedAttachments = attachments?.map((att: IAttachment) => ({
		filename: att.filename,
		content: att.content,
		contentType: att.mimeType,
	}));

	const mailOptions = {
		from: SMTP_USER,
		to,
		subject,
		html,
		attachments: formattedAttachments,
	};

	return transporter.sendMail(mailOptions);
}
