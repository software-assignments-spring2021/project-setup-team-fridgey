const { Router } = require("express");
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const shopDataJSON = require("../front-end/src/data/shoppingListMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopData = Object.entries(shopDataJSON[0]);
const router = new Router();
const FridgeItem = require("./database/fridgeItem");
const FridgeFruit = require("./database/fridgeItemSchemas/fruits");
const FridgeDairy = require("./database/fridgeItemSchemas/dairy");
const FridgeGrain = require("./database/fridgeItemSchemas/grains");
const FridgeMeat = require("./database/fridgeItemSchemas/meats");

// Get Shopping List Data
router.get("/", (req, res) => {
  res.status(200).json(shopData);
});

// Add Items to Fridge from Shopping List
router.post("/addToFridge", (req, res) => {
  let AddData = req.body;
  for (let i = 0; i < AddData.length; i++) {
    if (AddData[i].type == 0) {
      const fruit = new FridgeFruit({
        id: AddData[i].id,
        title: AddData[i].title,
        amount: AddData[i].amount,
        daysleft: AddData[i].daysleft,
        type: AddData[i].type,
        dateadded: AddData[i].dateadded,
        notes: "Add notes here!",
      });
      fruit
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (AddData[i].type == 1) {
      const dairy = new FridgeDairy({
        id: AddData[i].id,
        title: AddData[i].title,
        amount: AddData[i].amount,
        daysleft: AddData[i].daysleft,
        type: AddData[i].type,
        dateadded: AddData[i].dateadded,
        notes: "Add notes here!",
      });
      dairy
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (AddData[i].type == 2) {
      const grain = new FridgeGrain({
        id: AddData[i].id,
        title: AddData[i].title,
        amount: AddData[i].amount,
        daysleft: AddData[i].daysleft,
        type: AddData[i].type,
        dateadded: AddData[i].dateadded,
        notes: "Add notes here!",
      });
      grain
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const meat = new FridgeMeat({
        id: AddData[i].id,
        title: AddData[i].title,
        amount: AddData[i].amount,
        daysleft: AddData[i].daysleft,
        type: AddData[i].type,
        dateadded: AddData[i].dateadded,
        notes: "Add notes here!",
      });
      meat
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // const fridgeItem = new FridgeItem({
    //   id: AddData[i].id,
    //   title: AddData[i].title,
    //   amount: AddData[i].amount,
    //   daysleft: AddData[i].daysleft,
    //   type: AddData[i].type,
    //   dateadded: AddData[i].dateadded,
    //   notes: "Add notes here!",
    // });
    // fridgeData[AddData[i].type][1].push(AddData[i]);
    // fridgeItem
    //   .save()
    //   .then((result) => {
    //     res.send(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
  // res.status(200).json(shopData);

  // const fridgeItem = new FridgeItem({
  //   id: 1,
  //   title: "Apple",
  //   amount: "Lots",
  //   daysleft: "5",
  //   type: 0,
  //   dateadded: "April 1st, 2020",
  //   notes: "Add notes here!",
  // });
  // fridgeItem
  //   .save()
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
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

// Add Items to Shopping List within Shopping List
router.post("/addToShoppingList", (req, res) => {
  let addItem = req.body;

  shopData[addItem.type][1].push(addItem);
  res.status(200).json(shopData);
});

module.exports = router;
