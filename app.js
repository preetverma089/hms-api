import express from "express";
import { connectDB } from "./config/db.js";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./docs/swagger.js";
const app = express();
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/users", userRoutes);
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "API is healthy",
    date: new Date(),
  });
});

connectDB();
export default app;
