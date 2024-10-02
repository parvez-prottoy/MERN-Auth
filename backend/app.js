import cors from "cors";
import express from "express";
import morgan from "morgan";
import connectDb from "./config/db.js";
import {
  errorHandler,
  notFoundHandler,
} from "./src/middlewares/error.middleware.js";
import indexRoute from "./src/routes/index.route.js";

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
// note: routes
app.use("/", indexRoute);
// note: error handler
app.use(notFoundHandler, errorHandler);

export default app;
