import { Schema, model } from "mongoose";

const agentSchema = new Schema({
  agentID: {
    type: String,
    require: true,
  },
  agentName: {
    type: String,
    require: true,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  totalSales: {
    type: Number,
    default: 0,
  },
});

const Agent = model("Agent", agentSchema);

export default Agent;
