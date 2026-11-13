
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import projectRoutes from "./routes/projectRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);


app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));


app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API is running",
    database:
      mongoose.connection.readyState === 1
        ? "Connected"
        : "Disconnected",
    timestamp: new Date(),
  });
});
app.use("/api/projects", projectRoutes);

app.use("/api/blogs", blogRoutes);

app.use("/api/auth", authRoutes);

app.use(notFound);


app.use(errorHandler);

export default app;

