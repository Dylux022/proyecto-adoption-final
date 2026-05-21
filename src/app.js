import express from "express";
import adoptionRouter from "./routes/adoption.router.js";

const app = express();

app.use(express.json());

app.use("/api/adoptions", adoptionRouter);

export default app;