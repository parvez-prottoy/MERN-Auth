import express from "express";
import { getLogin, postUser } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/register", postUser);
router.get("/login", getLogin);

export default router;
