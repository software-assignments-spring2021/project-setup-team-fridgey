import NavBar from "../NavBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Recommendations.css";
import ButtonBase from '@material-ui/core/ButtonBase';
import { useState } from "react";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"


const RecItem = (data) => {
  const [buttonText,setButtonText] = useState('Un-Save Recipe')
  return(
    <div className="recommendations-root">
        <Grid container spacing={0} >
            <Grid item xs = {5}>
                <ButtonBase>
                    <img className= "recommendations-imagePreview" alt="complex" src={data.image} />
                </ButtonBase>
            </Grid>
            <Grid item xs = {7}>
                <div className = "recommendations-recipeTitle">{data.title}</div>
                <div className = "recommendations-info">{data.ingredients} Ingredients | {data.minutes} Minutes</div>
                <Button className = "recommendations-addButton" variant = "outlined" color="primary" onClick={() => setButtonText('Saved!')}> {buttonText} </Button>
            </Grid> 
        </Grid>
  </div>
  );
};

const recommendationData = 
[
  {
    title: "Classic Lasagna",
    ingredients: "7",
    minutes: 60,
    image: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg",
  },
  {
    title: "Koran Pork Chops",
    ingredients: "7",
    minutes: 60,
    image: "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg",
  },
  {
    title: "Marsala",
    ingredients: "13",
    minutes: 55,
    image: "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg",
  },
  {
    title: "Low Carb Skillet",
    ingredients: "7",
    minutes: 60,
    image: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg",
  },
  {
      title: "Indian Cauliflower",
      ingredients: "7",
      minutes: 60,
      image: "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg",
  },
  {
      title: "Oven-Baked Chicken",
      ingredients: "7",
      minutes: 60,
      image: "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg",
    },
];

const GenerateData = (data) => {
  return(
    recommendationData.map((recipe) => (
      <RecItem title = {recipe.title} ingredients = {recipe.ingredients} minutes = {recipe.minutes} image = {recipe.image}/>
    )
  ));
};

const SavedRecipes = (props) => {
  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Recommendations</h1>
      <HeaderButtons first = "recommendations-unusedButton" second = "recommendations-unusedButton" third = "recommendations-usedButton"/>
      <GeneratePaper>
        <GenerateData/>
      </GeneratePaper>
    </header>
  </div> 
);
  };

export { SavedRecipes };