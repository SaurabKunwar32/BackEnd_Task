import express from "express";
import { connectDB } from "./config/db.js";
import salesRoutes from "./routes/salesRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

await connectDB();

app.use("/api/sales", salesRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server started on PORT: ${PORT}`);
});
