import NavBar from "../NavBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Recommendations.css";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import { useState } from "react";
import {Recipe} from "./Recipe";

export const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      margin: 'auto',
      maxWidth: 400,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

export const RecItem = (data) => {
  const classes = useStyles();
  const [buttonText,setButtonText] = useState('Save Recipe')
  return(
    <div className="recommendations-root">
        <Grid container spacing={0} >
            <Grid item xs = {5}>
                <Link to = {{
                  pathname:'./Recipe',
                  state:{
                    name: data.title
                  }
                }}>
                  <ButtonBase>
                      <img className= "recommendations-imagePreview" alt="complex" src={data.image} />
                  </ButtonBase>
                </Link>
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

export const HeaderButtons = (data) => {
  return(
    <div>
      <Link to = "/Recommendations" className = "recommendations-link">
        <Button className = {data.first}>
          Recipes of the Day
        </Button>
      </Link>
        <Link to = "/ReadyToMake" className = "recommendations-link">
          <Button className = {data.second}>
            Ready to Make
          </Button>
        </Link>
        <Link to = "/SavedRecipes" className = "recommendations-link">
          <Button className = {data.third}>
              Saved Recipes
          </Button>
        </Link>
      </div>
  );
};

export const GeneratePaper = ({children}) => {
  const classes = useStyles();
  return(
    <Paper className={classes.paper}>
      {children}
    </Paper>
  );
};

const GenerateData = (data) => {
  const recipes = require("../data/mock_recipes.json");
  return(
    recipes.map((recipe) => (
      <RecItem title = {recipe.name} ingredients = {recipe.ingredients.length} minutes = {sumTime(recipe.timers)} image = {recipe.imageURL}/>
    )
  ));
};

function sumTime(times)
{
  let i = 0;
  let sum = 0;
  for(i = 0;i<times.length;i++)
  {
      sum += times[i];
  }
  return sum;
} 

const Recommendations = (props) => {
  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Recommendations</h1>
      <HeaderButtons first = "recommendations-usedButton" second = "recommendations-unusedButton" third = "recommendations-unusedButton"/>
      <GeneratePaper>
        <GenerateData/>
      </GeneratePaper>
    </header>
  </div> 
);
  };

export { Recommendations };