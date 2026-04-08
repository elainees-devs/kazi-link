import { Request, Response } from "express";
import { ApplicationModel, AnalyticsModel } from "../models";
import { sendMail } from "../services/nodeMailer.service";
import { EmailStatus } from "../constants/enums";

// Get all applications
export const getApplications = async (req: Request, res: Response) => {
	try {
		const applications = await ApplicationModel.find();
		res.status(200).json(applications);
	} catch (error) {
		res.status(500).json({ message: "Error fetching applications", error });
	}
};

// Get an application by ID
export const getApplicationById = async (req: Request, res: Response) => {
	try {
		const application = await ApplicationModel.findById(req.params.id);
		if (!application) return res.status(404).json({ message: "Application not found" });
		res.status(200).json(application);
	} catch (error) {
		res.status(500).json({ message: "Error fetching application", error });
	}
};

// POST /applications → minimal apply form
export const createApplication = async (req: Request, res: Response) => {
	try {
		// Extract applicant details and file(s)
		const { jobId, applicantName, applicantEmail, coverLetter, employerEmail } = req.body;
		let resumeUrl = req.body.resumeUrl;
		let attachments: { filename: string; content: Buffer; mimeType: string }[] = [];
		// If file uploaded via multer
		if (req.file) {
			attachments.push({
				filename: req.file.originalname,
				content: req.file.buffer,
				mimeType: req.file.mimetype,
			});
			resumeUrl = req.file.path || req.file.originalname;
		} else if (req.files && Array.isArray(req.files)) {
			attachments = req.files.map((file: any) => ({
				filename: file.originalname,
				content: file.buffer,
				mimeType: file.mimetype,
			}));
			if (req.files[0]) resumeUrl = req.files[0].path || req.files[0].originalname;
		}

		// Prepare email payload
		const emailPayload = {
			to: employerEmail,
			subject: `New Job Application from ${applicantName}`,
			html: `<h2>New Application</h2><p><b>Name:</b> ${applicantName}</p><p><b>Email:</b> ${applicantEmail}</p><p><b>Cover Letter:</b> ${coverLetter || "N/A"}</p>`,
			attachments,
		};

		let emailStatus = EmailStatus.Pending;
		try {
			await sendMail(emailPayload);
			emailStatus = EmailStatus.Sent;
		} catch (err) {
			emailStatus = EmailStatus.Failed;
		}

		// Save application
		const application = new ApplicationModel({
			jobId,
			applicantName,
			applicantEmail,
			coverLetter,
			resumeUrl,
			employerEmail,
			emailStatus,
			appliedAt: new Date(),
		});
		await application.save();

		// Log analytics (application)
		await AnalyticsModel.create({
			jobId,
			timestamp: new Date(),
			ip: req.ip,
		});
		res.status(201).json(application);
	} catch (error) {
		res.status(500).json({ message: "Error creating application", error });
	}
};

// Update an application
export const updateApplication = async (req: Request, res: Response) => {
	try {
		const application = await ApplicationModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!application) return res.status(404).json({ message: "Application not found" });
		res.status(200).json(application);
	} catch (error) {
		res.status(500).json({ message: "Error updating application", error });
	}
};

// Delete an application
export const deleteApplication = async (req: Request, res: Response) => {
	try {
		const application = await ApplicationModel.findByIdAndDelete(req.params.id);
		if (!application) return res.status(404).json({ message: "Application not found" });
		res.status(200).json({ message: "Application deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting application", error });
	}
};
