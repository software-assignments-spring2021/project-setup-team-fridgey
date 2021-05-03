const { Router } = require("express");
const recsRoute = require("../front-end/src/data/mock_recipes.json");
const apiRoute = require("../front-end/src/data/spoonacular_recipes.json");
const RecipeItem = require('./database/recipeItem');
const SavedRecipe = require('./database/savedRecipe');
const FridgeItem = require("./database/fridgeItem");
const axios = require("axios");
var pantryItems = ["Water" ,"Ice" ,"Flour" ,"Sugar","Cane Sugar" ,"Cooking Fat" ,"Cooking Oil" ,"Vegetable Oil" ,"Black Pepper" ,"Salt"];

var cors = require('cors');

const router = new Router();
app.use(cors());

router.get("/RecipesOfTheDay", (req, res) => {
  try {
    retrieveSavedRecipes("default").then((result) => {
      res.json(result);
    });
    res.status(200);
  } catch (error) {
    res.status(404);
  }
});

router.get("/SavedRecipes", async (req, res) => {
  console.log(req.query.userId);
  try {
    retrieveSavedRecipes(req.query.userId).then((result) => {
      res.json(result);
    });
    res.status(200);
  } catch (error) {
    res.status(404);
  }
});

async function intializeList(userId,itemId)
{
  const emptyList = new SavedRecipe(
    {
      userId: userId,
      ids: [itemId],
    }
  )
  await emptyList.save();
}

router.post("/SaveRecipe", async (req, res) => {
  var currentRecipeCount = await SavedRecipe.find({"userId":req.body.userId}).count();
  if(currentRecipeCount == 0) //initialize a list if empty
    await intializeList(req.body.userId,req.body.item.id);

    // var currentSavedList = await SavedRecipe.find({userId: req.body.userId});
    // currentSavedList[0].ids = pushIfNotAlreadyExists(req.body.item.id,currentSavedList[0].ids);

    // await SavedRecipe.updateOne(
    //   {"userId": req.body.userId},
    //   { $set: {"ids":currentSavedList[0].ids}}
    // );
  else{
    await SavedRecipe.updateOne({"userId": req.body.userId},{$push:{"ids": req.body.item.id}}).catch((error) => {
      console.log(error);
      res.json(404)
    });
    res.status(200);
  }
});

router.post("/addPopularRecipes", async(req, res ) => {
  var recipes = ['715424',
  '776505',
  '715449',
  '715560',
  '716410',
  '715467',
  '715419',
  '775585',
  '716423',
  '715421',
  '715380',
  '715437',
  '715394',
  '715544',
  '715455',
  '715562',
  '715527',
  '716426',
  '715469',
  '715541',
  '715391',
  '715545',
  '715569',
  '715559',
  '715415',
  '716431',
  '715381',
  '715563',
  '715452',
  '715550',
  '715397',
  '715439',
  '775666',
  '715523',
  '715515',
  '715477',
  '716409',
  '715385',
  '735820',
  '715495',
  '715568',
  '715511',
  '637187']
  const emptyList = new SavedRecipe(
    {
      userId: "default",
      ids: recipes,
    }
  );
  emptyList.save();
})

async function retrieveSavedRecipes(userId)
{
  var listOfRecipes;
  await SavedRecipe.find({userId: userId}).then((result) => {
    listOfRecipes = result[0].ids;
  });
  var returnList = [];
  for (var i = 0; i < listOfRecipes.length; i++) {
    await RecipeItem.find({ id: listOfRecipes[i] }).then((result) => {
      returnList.push(result[0]);
    });
  }
  return returnList;
}
function pushIfNotAlreadyExists(key, currentSavedList) {
  if (currentSavedList.indexOf(key) == -1) currentSavedList.push(key);
  return currentSavedList;
}

router.post("/RemoveRecipe", async (req, res) => {
  try {
    var currentSavedList = await SavedRecipe.find({userId: req.body.userId});
    currentSavedList[0].ids = currentSavedList[0].ids.filter((id) => id != req.body.item.id);

    await SavedRecipe.updateOne(
      {"userId": req.body.userId},
      { $set: {"ids":currentSavedList[0].ids}}
    );
  } catch (error) {
    res.status(404);
  }
  try {
    retrieveSavedRecipes(req.body.userId).then((result) => {
      res.json(result);
    });
    res.status(200);
  } catch (error) {
    res.status(404);
  }
});

router.get("/add-item", (req, res) => {
  for (var i = 0; i < recsRoute.length; i++) {
    recipeItem = new RecipeItem(recsRoute[i]);
    recipeItem
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.get("/add-recipes", async (req, res) => {
  for (var i = 0; i < apiRoute.length; i++) {
    await parseRecipe(apiRoute[i]);
  }
});

async function parseRecipe(recipe) {
  if ((await RecipeItem.count({ id: recipe.id })) != 0) {
    console.log("\'" + recipe.id + "\'" + ",");
    return;
  }
  try {
    const parsedRecipe = new RecipeItem({
      id: recipe.id,
      name: recipe.title,
      ingredients: await parseIngredients(recipe),
      time: recipe.readyInMinutes,
      imageURL: recipe.image,
      originalURL: recipe.sourceUrl,
    });
    await parsedRecipe.save();
    console.log("\'" + recipe.id + "\'" + ",");
  } catch (error) {
    return;
  }
}
function parseIngredients(recipe) {
  parsedIngredients = [];
  for (var i = 0; i < recipe.extendedIngredients.length; i++) {
    var ingredientsObj = {
      name: recipe.extendedIngredients[i].original,
      ingredientName: recipe.extendedIngredients[i].nameClean,
    };
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
  try {
    retrieveRecipes(listOfRecipes).then((result) => {
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
  console.log(await retrieveIngredients());
})

async function retrieveIngredients(){
  let existingIngredients = await FridgeItem.find({userId: "12345"});
  var ingredientsList = [];
  for(var i = 0;i<existingIngredients.length;i++){
    pushIfNotAlreadyExists(existingIngredients[i].title,ingredientsList);
  }
  return ingredientsList;
}

async function searchRecipesByIngredients()
{
  existingIngredients = await retrieveIngredients();
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
