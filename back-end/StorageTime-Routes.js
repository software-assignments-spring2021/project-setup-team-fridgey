const { Router } = require("express");
const router = new Router();
const StorageItem = require("./database/storageItem");

router.get("/", (req, res) => {
  StorageItem.find().then((result) => {
    res.json(result);
  });
});

//Update the MongoDB defaultTime when a user changes it for an item
router.post("/editStorageItem", (req, res) =>{
  let editStorageItem = req.body;

  StorageItem.findByIdAndUpdate(
    editStorageItem._id,
    {
      defaultTime: editStorageItem.defaultTime,
    },
    { new: true },
    function (err, docs){
      if (err){
        console.log(err)
      } else{
        console.log("Updated defaultTime : ", docs);
        res.send(docs);
      }
    }
  )
  res.status(200);
});

module.exports = router;