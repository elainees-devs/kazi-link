// src/templates/jobApplicationEmail.ts

export function jobApplicationEmailTemplate({ applicantName, applicantEmail, coverLetter }: {
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #007bff;">New Job Application Received</h2>
      <p><strong>Name:</strong> ${applicantName}</p>
      <p><strong>Email:</strong> <a href="mailto:${applicantEmail}">${applicantEmail}</a></p>
      <p><strong>Cover Letter:</strong></p>
      <div style="background: #f8f9fa; padding: 12px; border-radius: 4px;">
        ${coverLetter ? coverLetter.replace(/\n/g, '<br>') : 'No cover letter provided.'}
      </div>
      <p style="margin-top: 24px; color: #888; font-size: 13px;">This message was sent automatically by Kazi Link.</p>
    </div>
  `;
}
