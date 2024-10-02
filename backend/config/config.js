import dotenv from "dotenv";
dotenv.config("../.env");
const config = {
  port: process.env.PORT || 9090,
};

export default config;
