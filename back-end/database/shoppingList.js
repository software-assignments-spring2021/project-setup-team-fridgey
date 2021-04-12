const mongoose = require("mongoose");


const shoppingList = new mongoose.Schema({
  id: {
    type: Number,required:true
  },
  title: {
    type: String,required:true
  },
  amount: {
    type: String,required:true
  },
  type: {
    type: Number,required:true
  },
  dateadded: {
    type: String,required:true
  },
  notes: {
    type: String,required:true
  },
});

module.exports = mongoose.model("ShoppingList", shoppingList);