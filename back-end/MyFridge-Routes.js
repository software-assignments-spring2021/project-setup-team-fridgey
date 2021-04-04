const { Router } = require("express");
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const router = new Router();

// Get Fridge Data
router.get("/", (req, res) => {
  res.json(fridgeData);
});

// Delete a Specific Fridge Item
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let deleted = false;

  for (let i = 0; i < fridgeData.length; i++) {
    var removeIndex = fridgeData[i][1]
      .map(function (item) {
        return item.id.toString(); // Since id param is a string
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      fridgeData[i][1].splice(removeIndex, 1);
      deleted = true;
    }
  }
  
  if (deleted) {
    res.status(200).json(fridgeData);
  } else {
    res.status(200).json({ message: "Does not Exist" });
  }
});

router.post("/postRoute", (req, res) => {
  let editItem = req.body
  // console.log(editItem)

  fridgeData[editItem.type][1][editItem.id - 1].amount = editItem.amount
  fridgeData[editItem.type][1][editItem.id - 1].daysleft = editItem.useWithin;
  res.status(200).json(fridgeData)
})

// router.get("/:amount/:type/:id/:useWithin", (req, res) => {
//   var amount = req.params.amount
//   var type = req.params.type
//   var id = req.params.id
//   var useWithin = req.params.useWithin

//   // fridgeData[type][1][id - 1].amount = amount
//   // console.log(fridgeData[type][1][id - 1])
//   fridgeData[type][1][id - 1].amount = amount
//   fridgeData[type][1][id - 1].daysleft = useWithin;
//   // console.log(fridgeData[type][1][id - 1])

  
//   res.json(fridgeData)
// })

module.exports = router;
