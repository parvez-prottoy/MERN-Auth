import dotenv from "dotenv";
dotenv.config("../.env");
const config = {
  port: process.env.PORT || 9090,
  mongodbUrl: process.env.MONGODB_URL || "mongodb://localhost:27017/MERN-AUTH",
};

export default config;
