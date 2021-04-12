const mongoose = require("mongoose");

const fridgeItemSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    amount: { type: String, required: true },
    daysleft: { type: Number, required: true },
    type: { type: Number, required: true },
    dateadded: { type: String, required: true },
    notes: { type: String, required: true },
  },
  { timestamps: true }
);

const FridgeItem = mongoose.model("FridgeItem", fridgeItemSchema);

module.exports = FridgeItem;

// module.exports = fridgeItem = mongoose.model("fridgeItem", fridgeItem);

// "Fruits": [
//     {
//       "id": 1,
//       "title": "Apples",
//       "amount": "Lots",
//       "daysleft": 5,
//       "type": 0,
//       "dateadded": "February 26, 2021",
//       "notes": ""
//     },
// ]

// const foodItem = {
//     id: 1,
//     title: "Apples",
//     daysleft: 5,
//     amount: "Lots",
//     type: 0,
//     dateadded: { $date: { $numberLong: 161448318100 } },
//     notes: ""
//   };
