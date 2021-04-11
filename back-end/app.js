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
const MyFridgeRoutes = require("./MyFridge-Routes");
const ShoppingListRoutes = require("./ShoppingList-Routes");
const RecommendationsRoutes = require("./Recommendations-Routes");
const connectDB = require("./database/Connection");

connectDB();
app.use("/fridgeData", MyFridgeRoutes);
app.use("/shopData", ShoppingListRoutes);
app.use("/Recommendations", RecommendationsRoutes);
const ShoppingList = require('./database/shoppingList');
// app.get("/getRecipe", (req, res) => {
//   //add :name parameters later
//   request(
//     "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
//     function (error, response, body) {
//       if (!error && response.statusCode == 200) {
//         let parsedBody = JSON.parse(body);
//         let recipe = parsedBody[0];
//         res.json({ recipe });
//       }
//     }
//   );
// });

// app.post('/addIngredientToSL', (req, res, next) => {
//   var currentTimeInSeconds=Math.floor(Date.now()/1000);
//   const shoppingList = new ShoppingList({
//     id:"11111",
//     title: req.body.name,
//     amount: "some",
//     type: "????",
//     dataadded:currentTimeInSeconds,
//     notes: "Added from Recipe Page"
//   });
//   shoppingList.save().then(
//     () => {
//       res.status(201).json({
//         message: 'Post saved successfully!'
//       });

//       console.log(shoppingList)
//     }
//   ).catch(
//     (error) => {
//       res.status(400).json({
//         error: error
//       });
//     }
//   );
// });

app.post("/addIngredientToSL", (req, res) => {
  const data = {
    status: "amazing success!",
    message: "congratulations on send us this data!",
    name: req.body.name,
  };
  res.json(data);
});

app.get("/storagetimeitems", (req, res) => {
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

app.get("/storagetimesearchlistfruits", (req, res) => {
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

// export the express app we created to make it available to other modules
module.exports = app;
