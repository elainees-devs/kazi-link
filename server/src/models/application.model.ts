import mongoose, { Schema, Document } from 'mongoose';
import { IApplication } from '../types/interfaces.types';

export interface ApplicationDocument extends IApplication, Document {}

const ApplicationSchema = new Schema<ApplicationDocument>({
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true, index: true },
  applicantName: { type: String, required: true },
  applicantEmail: { type: String, required: true },
  coverLetter: { type: String },
  resumeUrl: { type: String, required: true },
})

export const ApplicationModel = mongoose.model<ApplicationDocument>('Application', ApplicationSchema);