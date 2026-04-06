import { Request, Response } from "express";
import { CategoryModel } from "../models";


// Get all categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

// Get a category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error fetching category", error });
  }
};

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = new CategoryModel({ name, description });
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

// Update a category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error updating category", error });
  }
};

// Delete a category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category", error });
  }
};