import React,{useState,useEffect,useWindowDimensions} from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "../App.css";
import WebpageModal from"./WebpageModal"
import axios from 'axios';

function search(source, title) {
  let index=0;
  let entry=null;

  title = title.toUpperCase();
  for (index = 0; index < source.length; ++index) {
      entry = source[index];
      if ( entry.name.toUpperCase()==title) {
          return entry;
      }
  }
}

function Recipe(props) {
  
  const recipes = require("../data/mock_recipes.json");
  const dish = search(recipes, props.location.state.name); //Big Night Pizza as demo, replaced by props.name later

  const ingredientList = dish.ingredients.map((ingredient) => <AddIngredientBox
    name={ingredient.name}
  > </AddIngredientBox>);

  const [data, setData] = useState([])
  // const [name, setName] = useState(0);
  // const [ingredients, setIngredients] = useState(0);
  // const [imgURL, setImgURL] = useState(0);
  // const [originalURL, setOriginalURL] = useState(0);

  // axios.get("/getRecipe").then(response=>{
  //   setData(response.data)
  //   // console.log(response.data.recipe)
  //   // setName(JSON.response.data.recipe.name); 
  //   // recipe = JSON.stringify(response);
  //   // setIngredients(response.data.recipe.ingredients);
  //   // setImgURL(response.data.recipe.imgURL);
  //   // setOriginalURL(response.data.recipe.originalURL);
    
  // })
  // console.log(data)
  // const ingredientList=(data.ingredients).map((ingredient)=><AddIngredientBox 
  //   name={ingredient.name}>
  // </AddIngredientBox>)

  

  
  const [show, setShow] = useState(false);

  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <p id="dishname">{dish.name}</p>
      <button class="recipeSite" >
        <img className = "recipe-img" src={dish.imageURL} onClick={() => setShow(true)}></img>
      </button>
      <WebpageModal onClose={() => setShow(false)} show={show} />
      {ingredientList}

    </header>

  );
}

export default Recipe;