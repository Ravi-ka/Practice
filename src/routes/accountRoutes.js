import express from "express";

import {
  forgotPassword,
  resetPassword,
} from "../controller/accountController.js";

export const accountRouter = express.Router();

accountRouter.post("/reset-password", resetPassword);
accountRouter.post("/forgot-password", forgotPassword);
