const mongoose = require("mongoose");

const shopItemSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    amount: { type: String, required: true },
    daysleft: {type: Number, required: true},
    type: { type: Number, required: true },
    dateadded: { type: String, required: true },
    notes: { type: String, required: true },
  },
);

const ShopItem = mongoose.model("ShopItem", shopItemSchema);

module.exports = ShopItem;
