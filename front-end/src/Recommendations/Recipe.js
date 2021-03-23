import React,{useState,useEffect,useWindowDimensions} from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "../App.css";
import WebpageModal from"./WebpageModal"

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
  const dish = search(recipes, "Curried Lentils and Rice"); //Big Night Pizza as demo, replaced by props.name later


  const [show, setShow] = useState(false);
  
  const ingredientList = dish.ingredients.map((ingredient) => <AddIngredientBox
    name={ingredient.name}
  > </AddIngredientBox>);

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