import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorHandler";
import confgApp from "./config/config";

const app = express();

app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get(`${confgApp.API_PATH}/`, (_req, res) => {
  res.send("API is running...");
});

app.use(`${confgApp.API_PATH}/users`, userRoutes);


export default app;
