import { model, Schema, Document } from "mongoose";
import { IAnalytics } from "../types/interfaces.types";

// Extend Document to include IAnalytics fields
export interface AnalyticsDocument extends IAnalytics, Document {}

const AnalyticsSchema = new Schema<AnalyticsDocument>({
	jobId: { type: String, required: false },
	searchQuery: { type: String, required: false },
	location: { type: String, required: false },
	timestamp: { type: Date, required: true },
	ip: { type: String, required: false },
});

export const AnalyticsModel = model<AnalyticsDocument>("Analytics", AnalyticsSchema);
