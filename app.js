import express from "express";
import path from "path";
import dotenv from "dotenv";
import { accountRouter } from "./src/routes/accountRoutes.js";

export const app = express();
app.use(express.json());

const configPath = path.resolve("src", "config", ".env");
dotenv.config({ path: configPath });

app.get("/", (req, res) => {
  return res.send("This is default path");
});

app.use("/api/v1/account", accountRouter);
