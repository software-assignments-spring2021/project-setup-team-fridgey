import Button from "@material-ui/core/Button";
import "./Recommendations.css";
import { useState,useEffect } from "react";
import {CreatePage} from "./Recommendations";


const SavedRecipes = (props) => {
  const dataSource = require("../data/mock_recipes.json")
  const [recipeData,setRecipeData] = useState(dataSource);

  function handleRemove(key,setButtonText){
    const newList = recipeData.filter((item) => item.name != key);
    setRecipeData(newList);
    setButtonText("Done");
  }

  const GenerateButton = (title) => {
    const [buttonText,setButtonText] = useState("Remove Recipe");
    return(
      <Button className = "recommendations-addButton" variant = "outlined" color="primary" onClick={() => handleRemove(title,setButtonText)}> {buttonText} </Button>
    )
  }

  return(
    <CreatePage page = {3} recipeData = {recipeData} buttonGenerator = {GenerateButton}/>
);
  };

export { SavedRecipes };