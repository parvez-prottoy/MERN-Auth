import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import connectDb from "./config/db.js";
import {
  errorHandler,
  notFoundHandler,
} from "./src/middlewares/error.middleware.js";
import authRoute from "./src/routes/auth.route.js";
import indexRoute from "./src/routes/index.route.js";

const app = express();
// note: connect db
connectDb.apply();
// note: middleware
app.use([
  morgan("dev"),
  cors(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
]);
// note: routes
app.use("/", indexRoute);
app.use("/api/v1/users", authRoute);
// note: error handler
app.use(notFoundHandler, errorHandler);

export default app;
