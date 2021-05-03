import Button from "@material-ui/core/Button";
import "./Recommendations.css";
import { useState,useEffect, useCallback, useRef } from "react";
import {CreatePage} from "./Recommendations";
import {fetchCurrentUser} from "./Recommendations";
import axios from 'axios';


const SavedRecipes = (props) => {
  // const defaultRecipeData = require("../data/mock_recipes.json")
  const [recipeData,setRecipeData] = useState([]);
  const user = useRef();

  useEffect(async () => {
    user.current = (await fetchCurrentUser());
    console.log(user.current);
    axios.get("Recommendations/SavedRecipes",{params:{userId: user.current}}).then(response => {
      setRecipeData(response.data);
    });
  },[]);

  

  function handleRemove(item,setButtonText){
    axios.post("Recommendations/RemoveRecipe", {
      item: item,
      userId: user.current
    }).then(response => {
      console.log(response.data);
      setRecipeData(response.data);
    });
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