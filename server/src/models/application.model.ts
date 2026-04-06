import mongoose, { Schema, Document } from 'mongoose';
import { Application } from '../types/interfaces.types';

export interface ApplicationDocument extends Application, Document {}

const ApplicationSchema = new Schema<ApplicationDocument>({
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true, index: true },
  applicantName: { type: String, required: true },
  applicantEmail: { type: String, required: true },
  coverLetter: { type: String },
  resumeUrl: { type: String, required: true },
})

export const ApplicationModel = mongoose.model<ApplicationDocument>('Application', ApplicationSchema);