import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers";

import { validateCategory } from "../middleware/validation.middleware";

const router = Router();

// GET /categories - list categories
router.get("/", getCategories);

// GET /categories/:id - get category by id
router.get("/:id", getCategoryById);

// POST /categories - create category
router.post("/", validateCategory, createCategory);

// PUT /categories/:id - update category
router.put("/:id", validateCategory, updateCategory);

// DELETE /categories/:id - delete category
router.delete("/:id", deleteCategory);

export default router;
