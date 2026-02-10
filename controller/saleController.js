import Sale from "../models/sale.js";
import Agent from "../models/agentData.js";

export const saleController = async (req, res) => {
  // console.log(req.body);
  try {
    const { agentID, agentName, amountSold, salesCount } = req.body;

    if (!agentID || !agentName || amountSold == null || salesCount == null) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    await Sale.create({
      agentID,
      agentName,
      amountSold,
      salesCount,
    });

    await Agent.findOneAndUpdate(
      { agentID },
      {
        agentID,
        agentName,
        $inc: {
          totalAmount: amountSold,
          totalSales: salesCount,
        },
      },
      { upsert: true, returnDocument: "after" },
    );

    res.status(201).json({ message: "Sale recorded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
