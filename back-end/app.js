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
const fridgeDataJSON = require("../front-end/src/data/fridgeMockData.json");
const fridgeData = Object.entries(fridgeDataJSON[0]);
const shopDataJSON = require("../front-end/src/data/shoppingListMockData.json");
const shopData = Object.entries(shopDataJSON[0]);

// Get Fridge Data
app.get("/fridgeData", (req, res) => {
  res.json(fridgeData);
});

// Delete a Specific Fridge Item
app.delete("/fridgeData/:id", (req, res) => {
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

// Get Shopping List Data
app.get("/shopData", (req, res) => {
  res.status(200).json(shopData);
});

// Add Items to Fridge from Shopping List
app.post("/addToFridge", (req, res) => {
  let AddData = req.body;
  for (let i = 0; i < AddData.length; i++) {
    fridgeData[AddData[i].type][1].push(AddData[i]);
  }
  res.status(200).json(shopData);
});

// Delete Multiple Items from Shopping List After Adding to Fridge
app.delete("/shopData", (req, res) => {
  let AddData = req.body;
  let deleted = false;
  for (let i = 0; i < AddData.length; i++) {
    const id = AddData[i].id; // Specific Item's Id
    const type = AddData[i].type; // Specific Item's Food Type
    var removeIndex = shopData[type][1]
      .map(function (item) {
        return item.id.toString(); // Since id param is a string
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      shopData[type][1].splice(removeIndex, 1);
      deleted = true;
    }
  }
  if (deleted) {
    res.status(200).json(shopData);
  } else {
    res.status(200).json({ message: "Does not Exist" });
  }
});

// Delete a Specific Shopping Item
app.delete("/shopData/:id", (req, res) => {
  const { id } = req.params;
  let deleted = false;
  for (let i = 0; i < shopData.length; i++) {
    var removeIndex = shopData[i][1]
      .map(function (item) {
        return item.id.toString(); // Since id param is a string
      })
      .indexOf(id);
    if (removeIndex !== -1) {
      shopData[i][1].splice(removeIndex, 1);
      deleted = true;
    }
  }
  if (deleted) {
    res.status(200).json(shopData);
  } else {
    res.status(200).json({ message: "Does not Exist" });
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
