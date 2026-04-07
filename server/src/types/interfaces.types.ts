import { Types } from "mongoose";
import { EmailStatus, JobSchedule, JobStatus, JobType } from "../constants/enums";

//Category interface
export interface ICategory {
  name: string;
  description?: string;
}
// Job interface
export interface IJob {
  title: string;
  description: string;
  company: string;
  slug: string; // Required for SEO-friendly public pages
  location: string;
  salary?: number;
  postedAt: Date;
  requirements: string[];
  benefits?: string[];
  isRemote: boolean; 
  jobType: JobType;
  jobStatus: JobStatus 
  jobSchedule: JobSchedule
  categoryId: string | Types.ObjectId; // Foreign key to Category
  views: number; // For tracking 
}

// Application interface
export interface IApplication {
  jobId: string | Types.ObjectId; // Foreign key to Job
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
  resumeUrl: string;
  appliedAt: Date;
  emailStatus: EmailStatus;
}

// Analytics interface
export interface IAnalytics {
  jobId?: string;        // Job viewed (optional for search)
  searchQuery?: string;  // Text searched
  location?: string;     // Location filter (optional)
  timestamp: Date;       // When the event occurred
  ip?: string;
}

// Attachment interface for email files
export interface IAttachment {
  filename: string;
  content: Buffer | string; // Buffer for binary, string for base64
  mimeType: string;
}

// Email payload interface for sending emails
export interface IEmailPayload {
  to: string;
  subject: string;
  html: string;
  attachments?: IAttachment[];
}
