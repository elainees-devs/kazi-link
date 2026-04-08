import { Router } from "express";
import {
  createSubCategory,
  deleteSubCategory,
  getSubCategories,
  getSubCategoryById,
  updateSubCategory,
} from "../controllers";
import { validateSubCategory } from "../middleware";

const subCategoryRouter = Router();

// Create subcategory
subCategoryRouter.post("/", validateSubCategory, createSubCategory);

// Get all subcategories
subCategoryRouter.get("/", getSubCategories);

// Get subcategory by ID
subCategoryRouter.get("/:id", getSubCategoryById);

// Update subcategory
subCategoryRouter.put("/:id", validateSubCategory, updateSubCategory);

// Delete subcategory
subCategoryRouter.delete("/:id", deleteSubCategory);

export default subCategoryRouter;
