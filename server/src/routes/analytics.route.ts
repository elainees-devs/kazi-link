import { Router } from "express";
import { createAnalytics, deleteAnalytics, getAnalytics, getAnalyticsById, updateAnalytics } from "../controllers";


const router = Router();

// GET /analytics - list analytics
router.get("/", getAnalytics);

// GET /analytics/:id - get analytics by id
router.get("/:id", getAnalyticsById);

// POST /analytics - create analytics record
router.post("/", createAnalytics);

// PUT /analytics/:id - update analytics record
router.put("/:id", updateAnalytics);

// DELETE /analytics/:id - delete analytics record
router.delete("/:id", deleteAnalytics);

export default router;
