const { Router } = require("express");
const router = new Router();
const StorageItem = require("./database/storageItem");

router.get("/", (req, res) => {
  StorageItem.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;