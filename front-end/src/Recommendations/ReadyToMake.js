import NavBar from "../NavBar";
import "./Recommendations.css";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"
import {RecItem} from "./Recommendations"
import { useState,useEffect } from "react";
import axios from 'axios';

const GenerateData = (data) => {
  const [recipeData,setRecipeData] = useState([]);
  useEffect(() => {
    axios.get("localhost:3000/testRecs").then(response => {
      setRecipeData(response.data)
    });
    
  },[]);

  return(
    recipeData.map((recipe) => (
      <RecItem title = {recipe.name} ingredients = {recipe.ingredients.length} minutes = {recipe.time} image = {recipe.imageURL}/>
    )
  ));
};

const ReadyToMake = (props) => {
  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Recommendations</h1>
      <HeaderButtons first = "recommendations-unusedButton" second = "recommendations-usedButton" third = "recommendations-unusedButton"/>
      <GeneratePaper>
        <GenerateData/>
      </GeneratePaper>
    </header>
  </div> 
);
  };

export { ReadyToMake };