const { Router } = require("express");
const router = new Router();
const axios = require("axios");
var request = require("request");

router.get("/", (req, res) => {
  /*
  Use hard-coded data for now because mock API has limited number of calls

  axios
    .get(`${process.env.API_BASE_URL}?key=${process.env.API_SECRET_KEY}&num=10`)
    .then(apiResponse => res.json(apiResponse.data))
    .catch(error => console.log("error"))
  */
  const body = [
    {
      id: 1,
      name: "Carbonated Water - Wildberry",
      category: 2,
      defaultTime: 1.5,
      shortTime: 1,
      averageTime: 1.5,
      longTime: 2,
    },
    {
      id: 2,
      name: "Rye Special Old",
      category: 3,
      defaultTime: 30,
      shortTime: 20,
      averageTime: 30,
      longTime: 40,
    },
    {
      id: 3,
      name: "Bread - Bagels, Plain",
      category: 1,
      defaultTime: 55.5,
      shortTime: 37,
      averageTime: 55.5,
      longTime: 74,
    },
    {
      id: 4,
      name: "Mix Pina Colada",
      category: 3,
      defaultTime: 1.5,
      shortTime: 1,
      averageTime: 1.5,
      longTime: 2,
    },
    {
      id: 5,
      name: "Bread - White, Unsliced",
      category: 1,
      defaultTime: 43.5,
      shortTime: 29,
      averageTime: 43.5,
      longTime: 58,
    },
    {
      id: 6,
      name: "Beef - Tenderloin Tails",
      category: 1,
      defaultTime: 22.5,
      shortTime: 15,
      averageTime: 22.5,
      longTime: 30,
    },
  ];
  res.json(body);
});
/*
router.get("/storagetimesearchlistfruits", (req, res) => {
  request(
    "https://api.mockaroo.com/api/b7a0c270?count=1000&key=a9407640",
    function (error, response, body) {
      if (!error & (response.statusCode == 200)) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(body);
      }
    }
  );
});
*/

module.exports = router;