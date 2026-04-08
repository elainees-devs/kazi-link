import { Request, Response } from "express";
import { SubCategoryModel } from "../models/subCategory.model";
import { generateSlug } from "../utils/slugGenerator";

// Create a new subcategory
export const createSubCategory = async (req: Request, res: Response) => {
  try {
    const { name, categoryId } = req.body;
    const slug = generateSlug(name);
    const subCategory = new SubCategoryModel({ name, slug, categoryId });
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating subcategory", error });
  }
};

// Get all subcategories
export const getSubCategories = async (req: Request, res: Response) => {
  try {
    const subCategories = await SubCategoryModel.find().lean();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subcategories", error });
  }
};

// Get a single subcategory by ID
export const getSubCategoryById = async (req: Request, res: Response) => {
  try {
    const subCategory = await SubCategoryModel.findById(req.params.id).lean();
    if (!subCategory) return res.status(404).json({ message: "Subcategory not found" });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subcategory", error });
  }
};

// Update a subcategory
export const updateSubCategory = async (req: Request, res: Response) => {
  try {
    const { name, categoryId } = req.body;
    const slug = name ? generateSlug(name) : undefined;
    const update: any = { ...req.body };
    if (slug) update.slug = slug;
    const subCategory = await SubCategoryModel.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    if (!subCategory) return res.status(404).json({ message: "Subcategory not found" });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating subcategory", error });
  }
};

// Delete a subcategory
export const deleteSubCategory = async (req: Request, res: Response) => {
  try {
    const subCategory = await SubCategoryModel.findByIdAndDelete(req.params.id);
    if (!subCategory) return res.status(404).json({ message: "Subcategory not found" });
    res.status(200).json({ message: "Subcategory deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting subcategory", error });
  }
};
