import colors from "colors";
import mongoose from "mongoose";
import config from "./config.js";

// note: connect mongoDB
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(config.mongodbUrl);
    console.log(
      colors.bgMagenta(`MongoDB Connected: ${connect.connection.host}`)
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDb;
