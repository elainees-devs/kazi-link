import { Router } from "express";
import {
	getApplications,
	getApplicationById,
	createApplication,
} from "../controllers/application.controller";
import { validateApplication } from "../middleware/validation.middleware";

const router = Router();

// GET /applications - list applications
router.get("/", getApplications);

// GET /applications/:id - get application by id
router.get("/:id", getApplicationById);

// POST /applications - create application
router.post("/", validateApplication, createApplication);

export default router;
