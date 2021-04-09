const mongoose = require("mongoose");

const fridgeItem = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  amount: {
    type: String,
  },
  daysleft: {
    type: Number,
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

module.exports = fridgeItem = mongoose.model("fridgeItem", fridgeItem);

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
