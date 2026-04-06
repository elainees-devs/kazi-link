import { Request, Response } from "express";
import { JobModel, AnalyticsModel } from "../models";

// GET /jobs → list jobs (lean, select fields, pagination)
export const getJobs = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const jobs = await JobModel.find({}, "title company location jobType jobStatus jobSchedule categoryId postedAt isRemote salary slug")
      .lean()
      .skip(skip)
      .limit(limit);
    const total = await JobModel.countDocuments();
    res.status(200).json({ jobs, total, page, pages: Math.ceil(total / limit) });
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

// GET /jobs/:id → job details + log analytics
export const getJobById = async (req: Request, res: Response) => {
  try {
    const job = await JobModel.findById(req.params.id).lean();
    if (!job) return res.status(404).json({ message: "Job not found" });
    // Log analytics (job view)
    await AnalyticsModel.create({
      jobId: Array.isArray(req.params.id) ? req.params.id[0] : req.params.id,
      timestamp: new Date(),
      ip: req.ip,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job", error });
  }
};

// GET /search → text search (title/location/category)
export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { q, location, category, page = 1, limit = 10 } = req.query;
    const query: any = {};
    // Helper to extract string from query param
    function getStringParam(param: any): string | undefined {
      if (typeof param === "string") return param;
      if (Array.isArray(param) && typeof param[0] === "string") return param[0];
      return undefined;
    }
    if (q) query.$text = { $search: q };
    if (location) query.location = getStringParam(location);
    if (category) query.categoryId = category;
    const skip = (Number(page) - 1) * Number(limit);
    const jobs = await JobModel.find(query, "title company location jobType jobStatus jobSchedule categoryId postedAt isRemote salary slug")
      .lean()
      .skip(skip)
      .limit(Number(limit));
    const total = await JobModel.countDocuments(query);
    // Log analytics (search)
    await AnalyticsModel.create({
      searchQuery: getStringParam(q),
      location: getStringParam(location),
      timestamp: new Date(),
      ip: req.ip,
    });
    res.status(200).json({ jobs, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  } catch (error) {
    res.status(500).json({ message: "Error searching jobs", error });
  }
};

// Create a new job
export const createJob = async (req: Request, res: Response) => {
	try {
		const job = new JobModel(req.body);
		await job.save();
		res.status(201).json(job);
	} catch (error) {
		res.status(500).json({ message: "Error creating job", error });
	}
};

// Update a job
export const updateJob = async (req: Request, res: Response) => {
	try {
		const job = await JobModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!job) return res.status(404).json({ message: "Job not found" });
		res.status(200).json(job);
	} catch (error) {
		res.status(500).json({ message: "Error updating job", error });
	}
};

// Delete a job
export const deleteJob = async (req: Request, res: Response) => {
	try {
		const job = await JobModel.findByIdAndDelete(req.params.id);
		if (!job) return res.status(404).json({ message: "Job not found" });
		res.status(200).json({ message: "Job deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting job", error });
	}
};
