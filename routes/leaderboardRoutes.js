import express from "express";
import { leaderBoardController } from "../controller/leaderBoardController.js";

const router = express.Router();

router.get("/", leaderBoardController);

export default router;