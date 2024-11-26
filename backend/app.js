import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1", carRoutes);

export default app;
