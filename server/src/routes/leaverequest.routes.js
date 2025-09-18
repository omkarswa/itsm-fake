import express from "express";
import { requestLeave, updateLeaveStatus, getAllLeaveRequests } from "../controllers/leaverequest.controller.js";

const router = express.Router();

// Employee
router.post("/", requestLeave);

// Manager/HR
router.put("/:id", updateLeaveStatus);

// HR/Admin → View all
router.get("/", getAllLeaveRequests);

export default router;
