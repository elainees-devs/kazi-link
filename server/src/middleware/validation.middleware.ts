
import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { JobType, JobStatus, JobSchedule } from "../constants/enums";

// Zod schemas
const CategorySchema = z.object({
	name: z.string().min(1, "Category 'name' is required and must be a non-empty string."),
	description: z.string().optional(),
});

const JobSchema = z.object({
	title: z.string().min(3, "Job 'title' is required and must be a string."),
	description: z.string().min(3, "Job 'description' is required and must be a string."),
	company: z.string().min(1, "Job 'company' is required and must be a string."),
	slug: z.string().min(1, "Job 'slug' is required and must be a string."),
	location: z.string().min(1, "Job 'location' is required and must be a string."),
	salary: z.number().optional(),
	postedAt: z.union([z.string(), z.date()]).optional(),
	requirements: z.array(z.string()).min(1, "Job 'requirements' must be a non-empty array of strings."),
	benefits: z.array(z.string()).optional(),
	isRemote: z.boolean(),
	jobType: z.nativeEnum(JobType),
	jobStatus: z.nativeEnum(JobStatus),
	jobSchedule: z.nativeEnum(JobSchedule),
	categoryId: z.string().min(1, "Job 'categoryId' is required and must be a string."),
	views: z.number().optional(),
});

const ApplicationSchema = z.object({
	jobId: z.string().min(1, "Application 'jobId' is required and must be a string."),
	applicantName: z.string().min(3, "Application 'applicantName' is required and must be a string."),
	applicantEmail: z.string().email("Application 'applicantEmail' is required and must be a valid email address."),
	coverLetter: z.string().optional(),
	resumeUrl: z.string().min(1, "Application 'resumeUrl' is required and must be a string."),
});

// Middleware generators
function makeValidator(schema: z.ZodSchema<any>) {
	return (req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse(req.body);
		if (!result.success) {
			const message = result.error.issues[0]?.message || "Validation error.";
			return res.status(400).json({ message });
		}
		next();
	};
}

export const validateCategory = makeValidator(CategorySchema);
export const validateJob = makeValidator(JobSchema);
export const validateApplication = makeValidator(ApplicationSchema);
