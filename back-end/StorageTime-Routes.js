const { Router } = require("express");
const router = new Router();
const StorageItem = require("./database/storageItem");

router.get("/", (req, res) => {
  StorageItem.find().then((result) => {
    res.json(result);
  });
});

// router.post("/editStorageItem", (req, res) =>{
//   let editStorageItem = req.body;

//   StorageItem.findByIdAndUpdate(editStorageItem.id,
//     {defaultTime: editStorageItem.defaultTime},
//     function(err, docs){
//       if(err){
//         console.log(err)
//       } else{
//         console.log("Updated defaultTime : ", docs);
//       }
//     }
//   )
//   res.status(200);
// });

module.exports = router;