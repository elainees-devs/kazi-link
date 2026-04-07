import mongoose, { Schema, Document } from 'mongoose';
import { IApplication } from '../types/interfaces.types';
import { EmailStatus } from '../constants/enums';

export interface ApplicationDocument extends IApplication, Document {}

const ApplicationSchema = new Schema<ApplicationDocument>({
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true, index: true },
  applicantName: { type: String, required: true },
  applicantEmail: { type: String, required: true },
  coverLetter: { type: String },
  resumeUrl: { type: String, required: true },
  employerEmail: { type: String, required: true },
  emailStatus: {
    type: String,
    enum: Object.values(EmailStatus),
    default: EmailStatus.Pending,
  },
  appliedAt: { type: Date, default: Date.now },
})

export const ApplicationModel = mongoose.model<ApplicationDocument>('Application', ApplicationSchema);