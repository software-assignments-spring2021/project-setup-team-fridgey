const { Router } = require("express");
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const shopDataJSON = require("../front-end/src/data/shoppingListMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopData = Object.entries(shopDataJSON[0]);
const router = new Router();

// Get Shopping List Data
router.get("/", (req, res) => {
  res.status(200).json(shopData);
});

// Add Items to Fridge from Shopping List
router.post("/addToFridge", (req, res) => {
  let AddData = req.body;
  for (let i = 0; i < AddData.length; i++) {
    fridgeData[AddData[i].type][1].push(AddData[i]);
  }
  res.status(200).json(shopData);
});

// Delete Multiple Items from Shopping List After Adding to Fridge
router.delete("/", (req, res) => {
  let AddData = req.body;
  let deleted = false;
  for (let i = 0; i < AddData.length; i++) {
    const id = AddData[i].id; // Specific Item's Id
    const type = AddData[i].type; // Specific Item's Food Type
    var removeIndex = shopData[type][1]
      .map(function (item) {
        return item.id.toString(); // Since id param is a string
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      shopData[type][1].splice(removeIndex, 1);
      deleted = true;
    }
  }
  if (deleted) {
    res.status(200).json(shopData);
  } else {
    res.status(200).json({ message: "Does not Exist" });
  }
});

// Delete a Specific Shopping Item
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let deleted = false;
  for (let i = 0; i < shopData.length; i++) {
    var removeIndex = shopData[i][1]
      .map(function (item) {
        return item.id.toString(); // Since id param is a string
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      shopData[i][1].splice(removeIndex, 1);
      deleted = true;
    }
  }
  if (deleted) {
    res.status(200).json(shopData);
  } else {
    res.status(200).json({ message: "Does not Exist" });
  }
});

module.exports = router;
