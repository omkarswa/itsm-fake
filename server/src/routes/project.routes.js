import express from "express";
import * as projectController from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", projectController.createProject);
router.get("/", projectController.getProjects);
router.post("/:id/assign", projectController.assignEmployees);
router.put("/:id/status", projectController.updateStatus);

export default router;
