import { Router } from "express";
import {
	createSubCategory,
	getSubCategories,
	getSubCategoryById,
	updateSubCategory,
	deleteSubCategory
} from "../controllers/subCategory.controller";
import { validateSubCategory } from "../middleware";


const router = Router();

// Create subcategory
router.post("/", validateSubCategory, createSubCategory);

// Get all subcategories
router.get("/", getSubCategories);

// Get subcategory by ID
router.get("/:id", getSubCategoryById);

// Update subcategory
router.put("/:id", validateSubCategory, updateSubCategory);

// Delete subcategory
router.delete("/:id", deleteSubCategory);

export default router;
