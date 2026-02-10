import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Sale from "./models/sale.js";
import Agent from "./models/agentData.js";

const seedData = [
  { agentID: "A101", agentName: "Alice", amountSold: 5000, salesCount: 10 },
  { agentID: "A101", agentName: "Alice", amountSold: 7000, salesCount: 15 },
  { agentID: "A102", agentName: "Bob", amountSold: 4000, salesCount: 8 },
  { agentID: "A102", agentName: "Bob", amountSold: 5000, salesCount: 12 },
  { agentID: "A103", agentName: "Charlie", amountSold: 9000, salesCount: 20 },
  { agentID: "A104", agentName: "David", amountSold: 3000, salesCount: 6 },
  { agentID: "A104", agentName: "David", amountSold: 4000, salesCount: 9 },
  { agentID: "A105", agentName: "Eve", amountSold: 12000, salesCount: 25 },
];

const seedSales = async () => {
  try {
    await connectDB();

    await Sale.deleteMany();
    await Agent.deleteMany();

    for (const sale of seedData) {
      await Sale.create(sale);

      await Agent.findOneAndUpdate(
        { agentID: sale.agentID },
        {
          agentID: sale.agentID,
          agentName: sale.agentName,
          $inc: {
            totalAmount: sale.amountSold,
            totalSales: sale.salesCount,
          },
        },
        { upsert: true }
      );
    }

    console.log("Sales and  Agents seeded successfully");
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.disconnect();
  }
};

seedSales();
