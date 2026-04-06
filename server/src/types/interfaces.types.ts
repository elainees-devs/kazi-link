import { JobSchedule, JobStatus, JobType } from "../constants/enums";

//Category interface
export interface Category {
  id: string;
  name: string;
  description?: string;
}
// Job interface
export interface Job {
  id: string;
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
  categoryId: string; // Foreign key to Category
  views: number; // For tracking 
}

// Application interface
export interface Application {
  id: string;
  jobId: string; // Foreign key to Job
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
  resumeUrl: string;
}
