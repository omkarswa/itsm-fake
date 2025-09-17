import express from "express";
import { signup ,signin ,profile } from "../controllers/auth.controller.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/signup" ,signup);
router.post("/signin" , signin);
router.get("/profile" ,protect,profile);

export default router ;





