const { Router } = require("express");
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopDataJSON = require("../front-end/src/data/shoppingListMockData.json");
const shopData = Object.entries(shopDataJSON[0]);
const FridgeItem = require("./database/fridgeItem");
const router = new Router();

// Get Fridge Data
router.get("/", (req, res) => {
  FridgeItem.find().then((result) => {
    res.json(result);
  });
});

// Delete a Specific Fridge Item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  FridgeItem.findByIdAndDelete(id, function (err, docs) {
    if (err) console.log(err);
    else {
      console.log("Deleted : ", docs);
      if (docs != null) {
        res.send(docs);
      }
    }
  });
  res.status(200);
});

// Edits a Specific Fridge Item
router.post("/editItem", (req, res) => {
  let editItem = req.body;

  FridgeItem.findByIdAndUpdate(editItem.id,
    {amount: editItem.amount, daysleft: editItem.useWithin, notes: editItem.notes},
    {new: true},
    function(err, docs) {
      if (err){
        console.log(err)
      } else{
        console.log("Updated User : ", docs);
      }
    }
  )
  
  res.status(200).json(fridgeData);
});

// Adds a Specific Fridge Item to Shopping List
router.post("/addItem", (req, res) => {
  let addItem = req.body;
  addItem.id = shopData[addItem.type][1].length + 1;

  shopData[addItem.type][1].push(addItem);
  res.status(200).json(fridgeData);
});

module.exports = router;
