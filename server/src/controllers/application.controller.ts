import { Request, Response } from "express";
import { ApplicationModel, AnalyticsModel } from "../models";

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
		const application = new ApplicationModel(req.body);
		await application.save();
		// Log analytics (application)
		await AnalyticsModel.create({
			jobId: req.body.jobId,
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
