import express from "express";
import * as attendanceController from "../controllers/attendance.controller.js";

const router = express.Router();

router.post("/checkin", attendanceController.checkIn);
router.post("/checkout", attendanceController.checkOut);
router.get("/:id/monthly", attendanceController.getMonthlyReport);


export default router;
