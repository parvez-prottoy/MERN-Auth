import express from "express";
import {
  getLogin,
  logoutUser,
  postUser,
} from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/register", postUser);
router.get("/login", getLogin);
router.post("/logout", logoutUser);

export default router;
