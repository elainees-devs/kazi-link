import { Router } from "express";

import { validateApplication } from "../middleware/validation.middleware";
import {
  createApplication,
  getApplicationById,
  getApplications,
} from "../controllers";

const applicationRouter = Router();

// GET /applications - list applications
applicationRouter.get("/", getApplications);

// GET /applications/:id - get application by id
applicationRouter.get("/:id", getApplicationById);

// POST /applications - create application
applicationRouter.post("/", validateApplication, createApplication);

export default applicationRouter;
