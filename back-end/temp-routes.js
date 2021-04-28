
const { Router } = require("express");
const recsRoute = require("../front-end/src/data/mock_recipes.json");
const apiRoute = require("../front-end/src/data/spoonacular_recipes.json");
const RecipeItem = require('./database/recipeItem');
const SavedRecipe = require('./database/savedRecipe');
const FridgeItem = require("./database/fridgeItem");

const axios = require("axios");
var pantryItems = ["Water" ,"Ice" ,"Flour" ,"Sugar","Cane Sugar" ,"Cooking Fat" ,"Cooking Oil" ,"Vegetable Oil" ,"Black Pepper" ,"Salt"];

const router = new Router();

function pushIfNotAlreadyExists(key, currentSavedList) {
    if (currentSavedList.indexOf(key) == -1) currentSavedList.push(key);
    return currentSavedList;
  }
async function retrieveIngredients(){
    let existingIngredients = await FridgeItem.find({userId: "12345"});
    var ingredientsList = [];
    for(var i = 0;i<existingIngredients.length;i++){
      pushIfNotAlreadyExists(existingIngredients[i].title,ingredientsList);
    }
    return ingredientsList;
  }


  router.get("/getMyIngredients", (req, res) => {
    FridgeItem.find({userId: "12345"}).then((result)=>{
        res.json(result)
    })
      
    
  });