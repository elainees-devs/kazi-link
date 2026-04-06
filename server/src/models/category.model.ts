import mongoose, { Schema, Document } from 'mongoose';
import { Category } from '../types/interfaces.types';

export interface CategoryDocument extends Category, Document {}

const CategorySchema = new Schema<CategoryDocument>({
  name: { type: String, required: true, unique: true, trim: true },
  description: { type: String },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

export const CategoryModel = mongoose.model<CategoryDocument>('Category', CategorySchema);