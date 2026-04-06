import { Types } from "mongoose";
import { JobSchedule, JobStatus, JobType } from "../constants/enums";

//Category interface
export interface Category {
  name: string;
  description?: string;
}
// Job interface
export interface Job {
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
export interface Application {
  jobId: string | Types.ObjectId; // Foreign key to Job
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
  resumeUrl: string;
}
