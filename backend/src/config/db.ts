import mongoose from "mongoose";
import confgApp from "./config";

const connectDB = async () => {
  try {
    console.log(confgApp.MONGO_URI)
    const conn = await mongoose.connect(confgApp.MONGO_URI as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
