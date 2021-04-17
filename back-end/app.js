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
const StorageTimeRoutes = require("./StorageTime-Routes");

app.use("/fridgeData", MyFridgeRoutes);
app.use("/shopData", ShoppingListRoutes);
app.use("/Recommendations", RecommendationsRoutes);
app.use("/storagetimeitems", StorageTimeRoutes);

app.post('/addIngredientToSL', (req, res, next) => {
  var currentTimeInSeconds=Math.floor(Date.now()/1000);
  const shoppingList = new ShoppingList({
    id:"11111",
    title: req.body.name,
    amount: "some",
    type: "????",
    dataadded:currentTimeInSeconds,
    notes: "Added from Recipe Page"
  });
  shoppingList.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });

      console.log(shoppingList)
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});
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

// app.post("/addIngredientToSL", (req, res) => {
//   const data = {
//     status: "amazing success!",
//     message: "congratulations on send us this data!",
//     name: req.body.name,
//   };
//   res.json(data);
// });

// export the express app we created to make it available to other modules
module.exports = app;
