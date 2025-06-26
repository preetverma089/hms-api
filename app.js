import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "API is healthy",
    date: new Date(),
  });
});

connectDB();
export default app;
