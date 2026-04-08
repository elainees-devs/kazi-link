import { Router } from "express";

import { validateApplication } from "../middleware/validation.middleware";
import {
  createApplication,
  getApplicationById,
  getApplications,
} from "../controllers";

const router = Router();

// GET /applications - list applications
router.get("/", getApplications);

// GET /applications/:id - get application by id
router.get("/:id", getApplicationById);

// POST /applications - create application
router.post("/", validateApplication, createApplication);

export default router;
