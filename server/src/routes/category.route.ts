import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers";

import { validateCategory } from "../middleware/validation.middleware";

const categoryRouter = Router();

// GET /categories - list categories
categoryRouter.get("/", getCategories);

// GET /categories/:id - get category by id
categoryRouter.get("/:id", getCategoryById);

// POST /categories - create category
categoryRouter.post("/", validateCategory, createCategory);

// PUT /categories/:id - update category
categoryRouter.put("/:id", validateCategory, updateCategory);

// DELETE /categories/:id - delete category
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
