import NavBar from "../NavBar";
import "./Recommendations.css";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"
import { useState,useEffect } from "react"
import {GenerateData} from "./Recommendations"
import axios from 'axios';

const ReadyToMake = (props) => {
  const [recipeData,setRecipeData] = useState([]);
  useEffect(() => {
    axios.get("/ReadyToMake").then(response => {
      setRecipeData(response.data)
    });
    
  },[]);

  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Recommendations</h1>
      <HeaderButtons first = "recommendations-unusedButton" second = "recommendations-usedButton" third = "recommendations-unusedButton"/>
      <GeneratePaper>
        <GenerateData recipes = {recipeData}/>
      </GeneratePaper>
    </header>
  </div> 
);
  };

export { ReadyToMake };