const { Router } = require("express");
const FridgeItem = require("./database/fridgeItem");
const ShopItem = require("./database/shopItem")
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

  // finds the item by _id and updates the item with new amount, new daysleft, and new notes
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
  
  res.status(200);
});

// Adds a Specific Fridge Item to Shopping List
router.post("/addItem", (req, res) => {
  let addItem = req.body;

  const shopItem = new ShopItem(addItem)

  shopItem.save()
    .then((result) => {
      res.send(result)
      res.status(200);
    })
    .catch((err) => {
      console.log(err)
    })
});

module.exports = router;
