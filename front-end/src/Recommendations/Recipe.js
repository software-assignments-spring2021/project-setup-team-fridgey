import React, { useState, useEffect } from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "../App.css";
import WebpageModal from "./WebpageModal";
import axios from "axios";

let pantryItems = [
  "Water",
  "Ice",
  "Flour",
  "Sugar",
  "Cane Sugar",
  "Cooking Fat",
  "Cooking Oil",
  "Vegetable Oil",
  "Black Pepper",
  "Salt",
];

function Recipe(props) {
  const itemsCall = async () => {
    let a = await axios.get("/http://157.245.131.216:3001/fridgeData");
    let items = a.data;
    let fruits = items.filter((item) => item.type === 0);
    let dairy = items.filter((item) => item.type === 1);
    let grains = items.filter((item) => item.type === 2);
    let meats = items.filter((item) => item.type === 3);
    let data = [
      ["Fruits", fruits],
      ["Dairy", dairy],
      ["Grain", grains],
      ["Meat", meats],
    ];
    setFridgeData(data);
  };

  useEffect(() => {
    itemsCall();
  }, []);

  const itemList = [];
  const [fridgeData, setFridgeData] = useState([]);
  console.log(fridgeData);
  for (let i = 0; i < fridgeData.length; i++) {
    for (let j = 0; j < fridgeData[i][1].length; j++) {
      itemList.push(fridgeData[i][1][j].title);
    }
  }

  for (let i = 0; i < pantryItems.length; i++) {
    itemList.push(pantryItems[i]);
  }

  const recipe = props.location.state.name;
  const ingredientList = recipe.ingredients.map((ingredient) => (
    <AddIngredientBox
      name={
        ingredient.ingredientName == null
          ? ingredient.name
          : ingredient.ingredientName
      }
      list={itemList}
    >
      {" "}
    </AddIngredientBox>
  ));

  const [show, setShow] = useState(false);

  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <p id="dishname">{recipe.name}</p>
      <button class="recipeSite">
        <img
          alt=""
          className="recipe-img"
          src={recipe.imageURL}
          onClick={() => setShow(true)}
        ></img>
      </button>
      <WebpageModal
        originalURL={recipe.originalURL}
        onClose={() => setShow(false)}
        show={show}
      />
      {ingredientList}
    </header>
  );
}

export default Recipe;
