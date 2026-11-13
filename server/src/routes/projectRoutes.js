
import express from "express";
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProjects).post(protect, createProject);

router
  .route("/:id")
  .put(protect, updateProject)
  .delete(protect, deleteProject);

router.get("/slug/:slug", getProject);;

export default router;
