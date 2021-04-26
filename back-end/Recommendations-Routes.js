const { Router } = require("express");
const recsRoute = require("../front-end/src/data/mock_recipes.json");
const apiRoute = require("../front-end/src/data/spoonacular_recipes.json");
const RecipeItem = require('./database/recipeItem');
const SavedRecipe = require('./database/savedRecipe');
const axios = require("axios");
var pantryItems = ["Water" ,"Ice" ,"Flour" ,"Sugar","Cane Sugar" ,"Cooking Fat" ,"Cooking Oil" ,"Vegetable Oil" ,"Black Pepper" ,"Salt"];

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
    retrieveSavedRecipes("12345").then((result) => {
      res.json(result);
    })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
});

router.get("/asdf", (req, res) => {
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
        userId: "12345",
        ids: [],
      }
    )
    emptyList.save();
  }
  try {
    var currentSavedList = await SavedRecipe.find({userId: "12345"});
    currentSavedList[0].ids = pushIfNotAlreadyExists(req.body.id,currentSavedList[0].ids);

    await SavedRecipe.updateOne(
      {"userId": "12345"},
      { $set: {"ids":currentSavedList[0].ids}}
    );
  } catch (error) {
      res.status(404);
  }
});

async function retrieveSavedRecipes(userId)
{
  var listOfRecipes;
  await SavedRecipe.find({userId: userId}).then((result) => {
    listOfRecipes = result[0].ids;
  })
  var returnList = [];
  for(var i = 0;i<listOfRecipes.length;i++)
  {
    await RecipeItem.find({id: listOfRecipes[i]}).then((result) => {
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
    var currentSavedList = await SavedRecipe.find({userId: "12345"});
    currentSavedList[0].ids = currentSavedList[0].ids.filter((id) => id != req.body.id);
    console.log("removing " + req.body.userId);
    console.log(currentSavedList[0].ids);

    await SavedRecipe.updateOne(
      {"userId": "12345"},
      { $set: {"ids":currentSavedList[0].ids}}
    );
  } catch (error) {
      res.status(404);
  }
  try {
    retrieveSavedRecipes("12345").then((result) => {
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

router.get("/add-recipes", async (req,res) => {
  for(var i = 0;i<apiRoute.length;i++)
  {
    await parseRecipe(apiRoute[i]);
  }
})

async function parseRecipe(recipe)
{
  if(await RecipeItem.count({id: recipe.id}) != 0)
  {
    console.log("already in database");
    return;
  }
  try{
    const parsedRecipe = new RecipeItem({
      id: recipe.id,
      name: recipe.title,
      ingredients: await parseIngredients(recipe),
      time: recipe.readyInMinutes,
      imageURL: recipe.image,
      originalURL: recipe.sourceUrl,
    });
    await parsedRecipe.save();
  }
  catch(error)
  {
    return;
  }
}
function parseIngredients(recipe)
{
  parsedIngredients = [];
  for(var i = 0;i<recipe.extendedIngredients.length;i++)
  {
    var ingredientsObj = {name: recipe.extendedIngredients[i].original, ingredientName: recipe.extendedIngredients[i].nameClean};
    parsedIngredients.push(ingredientsObj);
  }
  return parsedIngredients;
}

module.exports = router;

router.get("/randomRecipes", async(req,res) => {
  var recipes;
  for(var e = 0;e<50;e++)
  {
    await axios.get("https://api.spoonacular.com/recipes/random?apiKey=58c8346e31744103b11be438798e44b0&number=100")
      .then((response) => {
        recipes = response.data.recipes;
      })
      .catch((error) => {
        console.log(error);
      });
    for(var i = 0;i<recipes.length;i++)
    {
      await parseRecipe(recipes[i]);
    }
  }
  res.send("success");
})

router.post("/loopRecipes", async (req,res) => {
  axios.get("/Recommendations/randomRecipes").then((result)=>{
    console.log(result);
  }).catch((error) => {
    console.log("there is an error");
  });
  res.send("success");
})

router.get("/ReadyToMake", async (req,res) => {
  var listOfRecipes;
  await searchRecipesByIngredients().then((result) => 
  {
    listOfRecipes = result;
  });
  console.log(listOfRecipes)
  try {
    retrieveRecipes(listOfRecipes).then((result) => {
      console.log(result)
      res.json(result);
    })
    res.status(200);
  } catch (error) {
      res.status(404);
  }
})

async function retrieveRecipes(listOfRecipes)
{
  var returnList = [];
  for(var i = 0;i<listOfRecipes.length;i++)
  {
    await RecipeItem.find({id: listOfRecipes[i]}).then((result) => {
      returnList.push(result[0]);
    })
  }
  return returnList;
}

router.get("/test", async (req,res) => {
  console.log(removePantryItems(["WATER","tilapia fillets","tomatoes","Rice","beans","chili powder","onion"]));
})

async function searchRecipesByIngredients()
{
  existingIngredients = ["Ground Beef","tilapia fillets","tomatoes","Rice","beans","chili powder","onion"];
  existingIngredients = existingIngredients.map(function(x){ return x.toUpperCase(); });
  existingIngredients = removePantryItems(existingIngredients);
  var recipes;
  var ReadyToMakeRecipes = [];
  await RecipeItem.find()
      .then((result) => {
        recipes = result;
      })
      .catch((error) => {
        console.log("theres an error");
      })
  
  for(var i = 0;i<recipes.length;i++){
    var totalIngredients = 0;
    var usedIngredients = 0;
    for(var j = 0;j<recipes[i].ingredients.length;j++)
    {
      try{
        if(isPantryItem(recipes[i].ingredients[j].ingredientName.toUpperCase()))
          continue;
        totalIngredients++;
        if(checkIngredients(existingIngredients,recipes[i].ingredients[j].ingredientName.toUpperCase()))
        {
          usedIngredients++;
        }
      }catch(error)
      {
        continue;
      }
    }
    if(usedIngredients/totalIngredients > 0.4)
    {
      console.log("for recipe " + recipes[i].name + " we have " + usedIngredients + "/" + totalIngredients);
      ReadyToMakeRecipes.push(recipes[i].id);
    }
  }
  return ReadyToMakeRecipes;
}

pantryItems = pantryItems.map(function(x){ return x.toUpperCase(); })
function isPantryItem(key)
{
  var returnValue = false;
  pantryItems.forEach(function(pantryItem)
  {
    
    if(pantryItem.includes(key))
    {
      returnValue = true;
    }
    else if(key.includes(pantryItem))
    {
      returnValue = true;
    }
  });
  return returnValue;
}
function removePantryItems(existingIngredients)
{
  existingIngredients.forEach(function(ingredient){
    if(isPantryItem(ingredient))
      existingIngredients = existingIngredients.filter((id) => id != ingredient);
  })
  return existingIngredients;
}
function checkIngredients(existingIngredients, key)
{
  var returnValue = false;
  existingIngredients.forEach(function(ingredient)
  {
    
    if(ingredient.includes(key))
    {
      returnValue = true;
    }
    else if(key.includes(ingredient))
    {
      returnValue = true;
    }
  });
  return returnValue;
}