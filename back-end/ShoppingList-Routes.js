const { Router } = require("express");
const FridgeItem = require("./database/fridgeItem");
const ShopItem = require("./database/shopItem");
const router = new Router();

// Get Shopping List Data
router.get("/", (req, res) => {
  ShopItem.find().then((result) => {
    res.json(result);
  });
});

// Add Items to Fridge from Shopping List
router.post("/addToFridge", (req, res) => {
  let AddData = req.body;
  let array = [];

  for (let i = 0; i < AddData.length; i++) {
    const fridgeItem = {
      title: AddData[i].title,
      amount: AddData[i].amount,
      daysleft: AddData[i].daysleft,
      type: AddData[i].type,
      dateadded: AddData[i].dateadded,
      notes: AddData[i].notes,
    };
    array.push(fridgeItem);
  }

  FridgeItem.create(array).catch((err) => {
    return console.log(err);
  });

  res.status(200).json({ ok: true });
});

// Delete Multiple Items from Shopping List After Adding to Fridge
router.delete("/", (req, res) => {
  let AddData = req.body; // array of objects
  let deleted = false;

  for (let i = 0; i < AddData.length; i++) {
    var id = AddData[i].id; // Specific Item's Id

    ShopItem.findByIdAndDelete(id, function (err, docs) {
      if (err)  console.log(err);
      else {
        console.log("Deleted : ", docs);
        if (docs != null) {
          res.send(docs)
        }
      }
    })

    // const type = AddData[i].type; // Specific Item's Food Type
    // var removeIndex = shopData[type][1]
    //   .map(function (item) {
    //     return item.id.toString(); // Since id param is a string
    //   })
    //   .indexOf(id);
    // if (removeIndex !== -1) {
    //   shopData[type][1].splice(removeIndex, 1);
    //   deleted = true;
    // }
  }
  // if (deleted) {
  //   return res.status(200).json(shopData);
  // } else {
  //   return res.status(200).json({ message: "Does not Exist" });
  // }
  res.status(200)
});

// Delete a Specific Shopping Item
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  ShopItem.findByIdAndDelete(id, function (err, docs) {
    if (err)  console.log(err);
    else {
      console.log("Deleted : ", docs);
      if (docs != null) {
        res.send(docs)
      }
    }
  })
  res.status(200)
});

// Add Items to Shopping List within Shopping List
router.post("/addToShoppingList", (req, res) => {
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
