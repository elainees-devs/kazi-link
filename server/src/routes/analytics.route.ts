import { Router } from "express";
import {
  createAnalytics,
  deleteAnalytics,
  getAnalytics,
  getAnalyticsById,
  updateAnalytics,
} from "../controllers";

const analyticsRouter = Router();

// GET /analytics - list analytics
analyticsRouter.get("/", getAnalytics);

// GET /analytics/:id - get analytics by id
analyticsRouter.get("/:id", getAnalyticsById);

// POST /analytics - create analytics record
analyticsRouter.post("/", createAnalytics);

// PUT /analytics/:id - update analytics record
analyticsRouter.put("/:id", updateAnalytics);

// DELETE /analytics/:id - delete analytics record
analyticsRouter.delete("/:id", deleteAnalytics);

export default analyticsRouter;
