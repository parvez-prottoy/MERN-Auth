import express from "express";
import { getHealth, getHome } from "../controllers/index.controller.js";
const router = express.Router();

router.get("/", getHome);
router.get("/health", getHealth);

export default router;
