// import and instantiate express

const fs = require("fs");

const express = require("express"); // CommonJS import style!
const axios = require("axios");
require("dotenv").config({ silent: true });
const app = express(); // instantiate an Express object
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // decode JSON-formatted incoming POST data
app.use(bodyParser.urlencoded({ extended: true })); // decode url-encoded incoming POST
var request = require("request");
const dataGet = require("../front-end/src/data/fridgeMockData.json");
const data = Object.entries(dataGet[0]);
console.log(data);
// we will put some server logic here later...

app.get("/getFridgeData", (req, res) => {
  res.json(data);
});

app.delete("/getFridgeData/:id", (req, res) => {
  const { id } = req.params;
  const deleted = false;
  for (let i = 0; i < data.length; i++) {
    var removeIndex = data[i][1]
      .map(function (item) {
        let a = item.id.toString();
        console.log(a + 1);
        return a;
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      console.log("inside if part!");
      let x = data;
      x[i][1].splice(removeIndex, 1);
      res.status(200).json(x);
    }
  }
  if (deleted !== true) {
    res.status(404).json({ message: "Does not Exist" });
  }
});

app.get("/getRecipe", (req, res) => {
  //add    :name parameters later
  request(
    "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let parsedBody = JSON.parse(body);
        let recipe = parsedBody[0];
        res.json({ recipe });
      }
    }
  );
});

app.post("/addIngredientToSL", (req, res) => {
  const data = {
    status: "amazing success!",
    message: "congratulations on send us this data!",
    data: { name: req.body.name },
  };
  res.json(data);
});

app.get("/storagetimeitems", (req, res) => {
  /*
  axios
    .get(`${process.env.API_BASE_URL}?key=${process.env.API_SECRET_KEY}&num=10`)
    .then(apiResponse => res.json(apiResponse.data))
    .catch(error => console.log("error"))
    */
  const body = [
    {
      id: 1,
      food: "Carbonated Water - Wildberry",
      storage_time_short: 1,
      storage_time_medium: 1.5,
      storage_time_long: 2,
      category: 2,
    },
    {
      id: 2,
      food: "Rye Special Old",
      storage_time_short: 20,
      storage_time_medium: 30,
      storage_time_long: 40,
      category: 3,
    },
    {
      id: 3,
      food: "Bread - Bagels, Plain",
      storage_time_short: 37,
      storage_time_medium: 55.5,
      storage_time_long: 74,
      category: 1,
    },
    {
      id: 4,
      food: "Mix Pina Colada",
      storage_time_short: 1,
      storage_time_medium: 1.5,
      storage_time_long: 2,
      category: 3,
    },
    {
      id: 5,
      food: "Bread - White, Unsliced",
      storage_time_short: 29,
      storage_time_medium: 43.5,
      storage_time_long: 58,
      category: 1,
    },
    {
      id: 6,
      food: "Beef - Tenderloin Tails",
      storage_time_short: 15,
      storage_time_medium: 22.5,
      storage_time_long: 30,
      category: 1,
    },
  ];
  res.json(body);
});

var request = require("request");
app.get("/Recommendations", (req, res) => {
  request(
    "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(body);
      }
    }
  );
});

app.get("/ReadyToMake", (req, res) => {
  request(
    "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(body);
      }
    }
  );
});

// export the express app we created to make it available to other modules
module.exports = app;
