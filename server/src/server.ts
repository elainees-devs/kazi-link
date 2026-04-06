import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config as dotenvConfig } from "dotenv";
import { errorHandler } from "./middleware";

// Load environment variables
dotenvConfig();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions) // Type assertion for TS
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: any) => console.error("Could not connect to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());


// Routes
import jobRoutes from "./routes/job.route";
import applicationRoutes from "./routes/application.route";
import categoryRoutes from "./routes/category.route";
import analyticsRoutes from "./routes/analytics.route";

app.get("/", (req: Request, res: Response) => {
  res.send("Kazi Link API is running!");
});

app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);
app.use("/categories", categoryRoutes);
app.use("/analytics", analyticsRoutes);

// Error handler (last middleware)
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});