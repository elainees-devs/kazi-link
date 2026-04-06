import { Request, Response } from "express";
import { AnalyticsModel } from "../models";

// GET /analytics → list analytics (for admin/monitoring, not public)
export const getAnalytics = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;
    const analytics = await AnalyticsModel.find()
      .lean()
      .skip(skip)
      .limit(limit)
      .sort({ timestamp: -1 });
    const total = await AnalyticsModel.countDocuments();
    res.status(200).json({ analytics, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ message: "Error fetching analytics", error });
  }
};

// Get an analytics record by ID
export const getAnalyticsById = async (req: Request, res: Response) => {
	try {
		const analytics = await AnalyticsModel.findById(req.params.id);
		if (!analytics) return res.status(404).json({ message: "Analytics record not found" });
		res.status(200).json(analytics);
	} catch (error) {
		res.status(500).json({ message: "Error fetching analytics record", error });
	}
};

// Create a new analytics record
export const createAnalytics = async (req: Request, res: Response) => {
	try {
		const analytics = new AnalyticsModel(req.body);
		await analytics.save();
		res.status(201).json(analytics);
	} catch (error) {
		res.status(500).json({ message: "Error creating analytics record", error });
	}
};

// Update an analytics record
export const updateAnalytics = async (req: Request, res: Response) => {
	try {
		const analytics = await AnalyticsModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!analytics) return res.status(404).json({ message: "Analytics record not found" });
		res.status(200).json(analytics);
	} catch (error) {
		res.status(500).json({ message: "Error updating analytics record", error });
	}
};

// Delete an analytics record
export const deleteAnalytics = async (req: Request, res: Response) => {
	try {
		const analytics = await AnalyticsModel.findByIdAndDelete(req.params.id);
		if (!analytics) return res.status(404).json({ message: "Analytics record not found" });
		res.status(200).json({ message: "Analytics record deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting analytics record", error });
	}
};
