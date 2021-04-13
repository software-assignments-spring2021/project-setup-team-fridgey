const { Router } = require("express");
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopDataJSON = require("../front-end/src/data/shoppingListMockData.json");
const shopData = Object.entries(shopDataJSON[0]);
const FridgeFruit = require("./database/fridgeItemSchemas/fruits");
const FridgeDairy = require("./database/fridgeItemSchemas/dairy");
const FridgeGrain = require("./database/fridgeItemSchemas/grains");
const FridgeMeat = require("./database/fridgeItemSchemas/meats");
const router = new Router();

// // Get Fridge Data
// router.get("/", (req, res) => {
//   res.json(fridgeData);
// });

// Get Fridge Data
router.get("/fruit", (req, res) => {
  FridgeFruit.find().then((result) => {
    res.json(result);
  });
});

// Get Fridge Data
router.get("/dairy", (req, res) => {
  FridgeDairy.find().then((result) => {
    res.json(result);
  });
});

// Get Fridge Data
router.get("/grain", (req, res) => {
  FridgeGrain.find().then((result) => {
    res.json(result);
  });
});

// Get Fridge Data
router.get("/meat", (req, res) => {
  FridgeMeat.find().then((result) => {
    res.json(result);
  });
});

// Delete a Specific Fridge Item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  async function deleteItem(type) {
    type.findByIdAndDelete(id, function (err, docs) {
      if (err) {
        //docs == null)
        console.log(err);
      } else {
        console.log("Deleted : ", docs);
        if (docs != null) {
          res.send(docs);
          console.log("deleted");
        }
      }
    });
    // .catch(function (err) {
    //   console.log("error");
    // });
  }
  await deleteItem(FridgeFruit);
  await deleteItem(FridgeDairy);
  await deleteItem(FridgeGrain);
  await deleteItem(FridgeMeat);

  res.status(200);

  // function deleteItem(type) {
  //   type
  //     .deleteOne({ _id: id }, function () {
  //       console.log("Successful deletion");
  //       // res.send(result);
  //     })
  //     .catch(function (err) {
  //       console.log("error");
  //     });
  // }

  // FridgeFruit.deleteOne({ _id: id }, function (err, result) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("Successful deletion");
  //   res.status(200).send(result);
  // });

  // fruit
  //   .save()
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // findById(id).then(itemFound => {
  //   if (!itemFound) { return res.status(404)}
  //   return res.status(200).json(itemFound)
  // })

  // let deleted = false;

  // function check(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     var removeIndex = data[i][1]
  //       .map(function (item) {
  //         return item.id.toString(); // Since id param is a string
  //       })
  //       .indexOf(id);
  //     if (removeIndex !== -1) {
  //       data[i][1].splice(removeIndex, 1);
  //       deleted = true;
  //     }
  //   }
  // }

  // if (deleted) {
  //   res.status(200).json(fridgeData);
  // } else {
  //   res.status(200).json({ message: "Does not Exist" });
  // }
});

// Edits a Specific Fridge Item
router.post("/postRoute", (req, res) => {
  let editItem = req.body;

  fridgeData[editItem.type][1][editItem.id - 1].amount = editItem.amount;
  fridgeData[editItem.type][1][editItem.id - 1].daysleft = editItem.useWithin;
  fridgeData[editItem.type][1][editItem.id - 1].notes = editItem.notes;

  // console.log(fridgeData[editItem.type][1][editItem.id - 1].notes)
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
