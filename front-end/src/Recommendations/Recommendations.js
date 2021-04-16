import NavBar from "../NavBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./Recommendations.css";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState,useEffect } from "react";

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
  // const classes = useStyles();
  return(
    <div className="recommendations-root">
        <Grid container spacing={0} >
            <Grid item xs = {5}>
                <Link to = {{
                  pathname:'./Recipe',
                  state:{
                    name: data.recipe
                  }
                }}>
                  <ButtonBase>
                      <img className= "recommendations-imagePreview" alt="complex" src={data.recipe.imageURL} />
                  </ButtonBase>
                </Link>
            </Grid>
            <Grid item xs = {7}>
                <div className = "recommendations-recipeTitle">{trimTitle(data.recipe.name)}</div>
                <div className = "recommendations-info">{data.recipe.ingredients.length} Ingredients | {data.recipe.time} Minutes</div>
                {data.buttonGenerator(data.recipe)}
            </Grid> 
        </Grid>
  </div>
  );
};

export const HeaderButtons = (data) => {
  return(
    <div>
      <Link to = "/RecipesOfTheDay" className = "recommendations-link">
        <Button className = {headerSelection(1,data.page)}>
          Recipes of the Day
        </Button>
      </Link>
        <Link to = "/ReadyToMake" className = "recommendations-link">
          <Button className = {headerSelection(2,data.page)}>
            Ready to Make
          </Button>
        </Link>
        <Link to = "/SavedRecipes" className = "recommendations-link">
          <Button className = {headerSelection(3,data.page)}>
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

export const GenerateData = (data) => {
  return(
    data.list.map((recipe) => (
      <RecItem buttonGenerator = {data.buttonGenerator} recipe = {recipe}/>
    )
  ));
};

// function createKey(name,time)
// {
//   return name + "" + time;
// }
 
function trimTitle(title)
{
  if(title.length > 20)
    return title.substring(0,18) + '...';
  return title;
}

function headerSelection(page,button)
{
  if(page === button)
    return "recommendations-usedButton";
  return "recommendations-unusedButton";
}

export const CreatePage = (data) => {
  return(
    <div>
      <NavBar/>
      <header className="App-header">
        <h1>Recommendations</h1>
        <HeaderButtons page = {data.page} />
        <GeneratePaper>
          <GenerateData list = {data.recipeData} buttonGenerator = {data.buttonGenerator}/>
        </GeneratePaper>
      </header>
    </div> 
  )
}

const Recommendations = (props) => {
  const [recipeData,setRecipeData] = useState([]);
    useEffect(() => {
      axios.get("/RecipesOfTheDay").then(response => {
        setRecipeData(response.data)
      });
    },[]);

  function handleRemove(key,setButtonText){
    const newList = recipeData.filter((item) => item.name !== key);
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

export { Recommendations };