import express from "express";
import connectDb from "./config/db.js";

const app = express();
// note: connect db
connectDb.apply();

export default app;
