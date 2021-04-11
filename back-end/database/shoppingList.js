const mongoose = require("mongoose");



const shoppingList = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  amount: {
    type: String,
  },
  type: {
    type: Number,
  },
  dateadded: {
    type: String,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model("ShoppingList", shoppingList);