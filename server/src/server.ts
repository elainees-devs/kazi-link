import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config as dotenvConfig } from "dotenv";
import { errorHandler } from "./middleware";
import {
  analyticsRouter,
  applicationRouter,
  categoryRouter,
  jobRouter,
  subCategoryRouter,
} from "./routes";

// Load environment variables
dotenvConfig();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("Could not connect to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Kazi Link API is running!");
});

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", message: "API is healthy" });
});

// Use routes

app.use("/jobs", jobRouter);
app.use("/applications", applicationRouter);
app.use("/categories", categoryRouter);
app.use("/subcategories", subCategoryRouter);
app.use("/analytics", analyticsRouter);

// Error handler (last middleware)
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
