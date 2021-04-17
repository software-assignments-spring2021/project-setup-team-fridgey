const { Router } = require("express");
const recsRoute = require("../front-end/src/data/mock_recipes.json");
const RecipeItem = require('./database/recipeItem');
const SavedRecipe = require('./database/savedRecipe');
var savedRecipes = [];

const router = new Router();

router.get("/RecipesOfTheDay", (req, res) => {
  try {
    RecipeItem.find()
      .then((result) => {
        res.json(result);
      })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
});

router.get("/SavedRecipes", async (req, res) => {
  try {
    retrieveSavedRecipes("6078872528e1ec27a8d057e9").then((result) => {
      res.json(result);
    })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
});

router.get("/ReadyToMake", (req, res) => {
  try {
    RecipeItem.find()
      .then((result) => {
        res.json(result);
      })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
});

router.post('/SaveRecipe', async (req, res) => { 
  var currentRecipeCount = await SavedRecipe.count();
  if(currentRecipeCount == 0) //initialize a list if empty
  {
    const emptyList = new SavedRecipe(
      {
        ids: [],
      }
    )
    emptyList.save();
  }
  try {
    var currentSavedList = await SavedRecipe.find({_id: "6078872528e1ec27a8d057e9"});
    currentSavedList[0].ids = pushIfNotAlreadyExists(req.body._id,currentSavedList[0].ids);

    await SavedRecipe.updateOne(
      {"_id": "6078872528e1ec27a8d057e9"},
      { $set: {"ids":currentSavedList[0].ids}}
    );
  } catch (error) {
      res.status(404);
  }
});

async function retrieveSavedRecipes(_id)
{
  var listOfRecipes;
  await SavedRecipe.find({_id: _id}).then((result) => {
    listOfRecipes = result[0].ids;
  })
  var returnList = [];
  for(var i = 0;i<listOfRecipes.length;i++)
  {
    await RecipeItem.find({_id: listOfRecipes[i]}).then((result) => {
      returnList.push(result[0]);
    })
  }
  return returnList;
}
function pushIfNotAlreadyExists(key, currentSavedList)
{
  if(currentSavedList.indexOf(key) == -1)
    currentSavedList.push(key);
  return currentSavedList;
}

router.post("/RemoveRecipe", async (req,res) => {
  try {
    var currentSavedList = await SavedRecipe.find({_id: "6078872528e1ec27a8d057e9"});
    currentSavedList[0].ids = currentSavedList[0].ids.filter((id) => id != req.body._id);

    await SavedRecipe.updateOne(
      {"_id": "6078872528e1ec27a8d057e9"},
      { $set: {"ids":currentSavedList[0].ids}}
    );
  } catch (error) {
      res.status(404);
  }
  try {
    retrieveSavedRecipes("6078872528e1ec27a8d057e9").then((result) => {
      res.json(result);
    })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
});

router.get("/add-item", (req,res) => {
  for(var i = 0;i<recsRoute.length;i++)
  {
    recipeItem = new RecipeItem(recsRoute[i]);
    recipeItem.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
  }
});

module.exports = router;