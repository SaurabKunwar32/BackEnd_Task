import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Test");
    console.log("Database Connected successfully !!");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to the database !!");
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  await mongoose.disconnect();
  console.log("Database Disconnected");
  process.exit(0);
});
