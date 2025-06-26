import mongoose from "mongoose";
import { systemVariables } from "./config.js";

const MONGO_URI = systemVariables.mongoURI;
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};
