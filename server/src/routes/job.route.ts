import { Router } from "express";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs,
  searchJobs,
  updateJob,
} from "../controllers";
import { validateJob } from "../middleware/validation.middleware";

const jobRouter = Router();

// GET /jobs - list jobs
jobRouter.get("/", getJobs);

// GET /jobs/search - search jobs
jobRouter.get("/search", searchJobs);

// GET /jobs/:id - get job by id
jobRouter.get("/:id", getJobById);

// POST /jobs - create job
jobRouter.post("/", validateJob, createJob);

// PUT /jobs/:id - update job
jobRouter.put("/:id", validateJob, updateJob);

// DELETE /jobs/:id - delete job
jobRouter.delete("/:id", deleteJob);

export default jobRouter;
