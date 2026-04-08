import mongoose, { Schema, Document } from 'mongoose';
import { ISubcategory } from '../types/interfaces.types';


export interface SubCategoryDocument extends ISubcategory, Document {}

const SubCategorySchema = new Schema<SubCategoryDocument>({
	name: { type: String, required: true, trim: true },
	slug: { type: String, required: true, unique: true, trim: true },
	categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true, index: true },
}, {
	timestamps: true,
	toJSON: { virtuals: true },
	toObject: { virtuals: true }
});

export const SubCategoryModel = mongoose.model<SubCategoryDocument>('SubCategory', SubCategorySchema);
