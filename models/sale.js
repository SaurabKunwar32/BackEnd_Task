import { Schema, model } from "mongoose";

const saleSchema = new Schema({
  agentID: {
    type: String,
    require: true,
  },
  agentName: {
    type: String,
    require: true,
  },
  amountSold: {
    type: Number,
    required: true,
  },
  salesCount: {
    type: Number,
    require: true,
  },
});

const Sale = model("Sale", saleSchema);

export default Sale;
