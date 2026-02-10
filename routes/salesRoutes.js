import express from "express";
import { saleController } from "../controller/saleController.js";

const router = express.Router();

router.post("/", saleController);

export default router;
