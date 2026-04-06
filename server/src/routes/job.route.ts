import { Router } from "express";
import {
	getJobs,
	getJobById,
	searchJobs,
	createJob,
	updateJob,
	deleteJob,
} from "../controllers/job.controller";
import { validateJob } from "../middleware/validation.middleware";

const router = Router();

// GET /jobs - list jobs
router.get("/", getJobs);

// GET /jobs/search - search jobs
router.get("/search", searchJobs);

// GET /jobs/:id - get job by id
router.get("/:id", getJobById);

// POST /jobs - create job
router.post("/", validateJob, createJob);

// PUT /jobs/:id - update job
router.put("/:id", validateJob, updateJob);

// DELETE /jobs/:id - delete job
router.delete("/:id", deleteJob);

export default router;
