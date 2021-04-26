const { Router } = require("express");
const router = new Router();
const UserData = require("./database/userData");

router.get("/", (req, res) => {
  UserData.find().then((result) => {
    res.json(result);
  });
});

module.exports = router;