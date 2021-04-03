import Button from "@material-ui/core/Button";
import "./Recommendations.css";
import { useState,useEffect } from "react";
import axios from 'axios';
import {CreatePage} from "./Recommendations";


const RecipesOfTheDay = (props) => {
  const [recipeData,setRecipeData] = useState([]);
    useEffect(() => {
      axios.get("/RecipesOfTheDay").then(response => {
        setRecipeData(response.data)
      });
    },[]);

  function handleSave(key,setButtonText){
    setButtonText("Saved!");
  }

  const GenerateButton = (title) => {
    const [buttonText,setButtonText] = useState("Save Recipe");
    return(
      <Button className = "recommendations-addButton" variant = "outlined" color="primary" onClick={() => handleSave(title,setButtonText)}> {buttonText} </Button>
    )
  }

  return(
    <CreatePage page = {1} recipeData = {recipeData} buttonGenerator = {GenerateButton}/>
);
  };

export { RecipesOfTheDay };