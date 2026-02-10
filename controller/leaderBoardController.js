import Agent from "../models/agentData.js";

export const leaderBoardController = async (req, res) => {
  try {
    const agents = await Agent.find().sort({ totalAmount: -1 });
    // console.log(agents);

    let leaderboard = [];
    let rank = 1;
    let prevAmount = null;

    agents.forEach((agent, index) => {
      // console.log(agent);
      // console.log(index);
      if (prevAmount !== null && agent.totalAmount < prevAmount) {
        rank = index + 1;
      }

      prevAmount = agent.totalAmount;

      leaderboard.push({
        rank,
        agentID: agent.agentID,
        agentName: agent.agentName,
        totalSalesAmount: agent.totalAmount,
        totalSalesCount: agent.totalSales,
      });
    });

    res.status(200).json({ leaderboard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
