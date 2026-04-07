import { JobSchedule, JobStatus, JobType } from "../constants";

// Category interface (frontend tailored)
export interface ICategory {
	id: string; // Unique identifier (from backend)
	name: string;
	description?: string;
}

// Job interface (frontend tailored)
export interface IJob {
	id: string; // Unique identifier (from backend)
	title: string;
	description: string;
	company: string;
	slug: string; // SEO-friendly public pages
	location: string;
	salary?: number;
	postedAt: string; // ISO string from backend
	requirements: string[];
	benefits?: string[];
	isRemote: boolean;
	jobType: JobType;
	jobStatus: JobStatus;
	jobSchedule: JobSchedule;
	categoryId: string; // Foreign key to Category (as string)
	views: number;
}

// Application interface (frontend tailored)
export interface IApplication {
	id?: string; // Optional, present if fetched from backend
	jobId: string; // Foreign key to Job (as string)
	applicantName: string;
	applicantEmail: string;
	coverLetter?: string;
	resumeUrl: string;
	appliedAt?: string; // ISO string, optional
}

// Analytics interface (frontend tailored)
export interface IAnalytics {
	id?: string;
	jobId?: string;        // Job viewed (optional for search)
	searchQuery?: string;  // Text searched
	location?: string;     // Location filter (optional)
	timestamp: string;     // ISO string
	ip?: string;
}
