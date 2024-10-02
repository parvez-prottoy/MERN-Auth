import express from "express";
import { postUser } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/", postUser);

export default router;
