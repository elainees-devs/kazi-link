import mongoose, { Schema, Document } from 'mongoose';
import { IJob } from '../types/interfaces.types';
import { JobSchedule, JobStatus, JobType } from '../constants/enums';

export interface JobDocument extends IJob, Document {}

const JobSchema = new Schema<JobDocument>({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  company: { type: String, required: true, index: true },
  slug: { type: String, required: true, unique: true, index: true },
  location: { type: String, required: true, index: true },
  salary: { type: Number },
  postedAt: { type: Date, default: Date.now },
  requirements: [{ type: String }],
  benefits: [{ type: String }],
  isRemote: { type: Boolean, default: false },
  jobType: { type: String, enum: Object.values(JobType), required: true },
  jobStatus: { type: String, enum: Object.values(JobStatus), default: JobStatus.Open, index: true },
  jobSchedule: { type: String, enum: Object.values(JobSchedule), required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true, index: true },
  views: { type: Number, default: 0 },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Optimization: Index for the combined search (title + location)
JobSchema.index({ title: 'text', location: 'text' });

export const JobModel = mongoose.model<JobDocument>('Job', JobSchema);