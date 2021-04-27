const { Router } = require("express");
const FridgeItem = require("./database/fridgeItem");
const ShopItem = require("./database/shopItem");
const { body, validationResult } = require("express-validator");
const router = new Router();

// Get Shopping List Data
router.get("/", (req, res) => {
  ShopItem.find().then((result) => {
    res.status(200).json(result);
  });
});

// Add Items to Fridge from Shopping List
router.post("/addToFridge", (req, res) => {
  let AddData = req.body;
  let array = [];
  for (let i = 0; i < AddData.length; i++) {
    const fridgeItem = {
      userId: AddData[i].userId,
      title: AddData[i].title,
      amount: AddData[i].amount,
      daysleft: AddData[i].daysleft,
      type: AddData[i].type,
      dateadded: AddData[i].dateadded,
      notes: AddData[i].notes,
    };
    console.log(fridgeItem);
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
  let ids = [];
  for (let i = 0; i < AddData.length; i++) {
    var id = AddData[i].id; // Specific Item's Id
    ids.push(id);
  }
  ShopItem.deleteMany({ _id: { $in: ids } }).catch((err) => {
    return console.log(err);
  });
  res.status(200).json({ ok: true });
});

// Delete a Specific Shopping Item
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  ShopItem.findByIdAndDelete(id, function (err, docs) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Deleted : ", docs);
      if (docs != null) {
        res.send(docs);
      }
    }
  });
  res.status(200);
});

// Add Items to Shopping List within Shopping List
router.post(
  "/addToShoppingList",
  body("title").isLength({ min: 2, max: 28 }),
  body("amount").isLength({ min: 2 }),
  body("type").isFloat({ min: 0, max: 3 }),
  (req, res) => {
    console.log("inside add item");
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log(errors.array());
      return res.status(302).json({ errors: errors.array() });
    }
    let addItem = req.body;
    const shopItem = new ShopItem(addItem);
    shopItem
      .save()
      .then((result) => {
        res.send(result);
        res.status(200);
      })
      .catch((err) => {
        console.log(err);
        return res.send({ success: false, err });
      });
  }
);

module.exports = router;
