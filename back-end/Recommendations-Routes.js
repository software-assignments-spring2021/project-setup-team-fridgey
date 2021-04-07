const { Router } = require("express");
const recsRoute = require("../front-end/src/data/mock_recipes.json");
var savedRecipes = [];

const router = new Router();

router.get("/RecipesOfTheDay", (req, res) => {
  try {
    res.json(recsRoute)
    res.status(200).json("works");
  } catch (error) {
      res.status(404);
  }
});

router.get("/SavedRecipes", (req, res) => {
  try {
    res.json(savedRecipes)
    res.status(200).json("works");
  } catch (error) {
      res.status(404);
  }
});

router.get("/ReadyToMake", (req, res) => {
  try {
    res.send(recsRoute)
    res.status(200).json("works");
  } catch (error) {
      res.status(404);
  }
});

router.post('/SaveRecipe', (req, res) => { 
  try {
    savedRecipes.push(req.body);
    res.json(savedRecipes);
  } catch (error) {
      res.status(404);
  }
});

router.post("/RemoveRecipe", (req,res) => {
  try {
    console.log("currently: " + savedRecipes.length);
    console.log("removing: " + req.body.name);
    savedRecipes = savedRecipes.filter((item) => item.name != req.body.name);
    console.log("now is: " + savedRecipes.length);
    res.json(savedRecipes);
    res.status(200).json("works");
  } catch (error) {
      res.status(404);
  }
});

router.get("/RecipesOfTheDayTest", (req, res) => {
  request(
    "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let parsedBody = JSON.parse(body);
        res.json(parsedBody);
      }
    }
  );
});

router.get("/ReadyToMakeTest", (req, res) => {
  request(
    "https://my.api.mockaroo.com/mock_recipes.json?key=f9883210",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let parsedBody = JSON.parse(body);
        res.json(parsedBody);
      }
    }
  );
});

module.exports = router;