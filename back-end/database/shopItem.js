const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    amount: { type: String, required: true },
    type: { type: Number, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

const ShopItem = mongoose.model("ShoppingItem", shopItemSchema);

module.exports = ShopItem;
