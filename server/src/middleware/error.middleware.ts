import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";

// Custom Error Interface (optional)
interface CustomError extends Error {
  status?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  // Log error to errors.log with context
  logger.error('Error occurred', {
    message: err.message,
    stack: err.stack,
    userId: (req as any).user?.id,
    method: req.method,
    url: req.originalUrl,
    params: req.params,
    body: req.body,
    ip: req.ip,
  });

  const status = err.status || 500;
  const message = err.message || "Internal Server Error";

  res.status(status).json({
    success: false,
    status,
    message,
  });
};