import cors from "cors";
import express from "express";
import morgan from "morgan";
import connectDb from "./config/db.js";

const app = express();
// note: connect db
connectDb.apply();
// note: middleware
app.use([
  morgan("dev"),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

export default app;
