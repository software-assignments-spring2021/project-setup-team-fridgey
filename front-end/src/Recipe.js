import React from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "./App.css";

const Recipe = () => {
  const ingredients = [
    {
      id: 1,
      amount: "2",
      name: "egg",
    },
    {
      id: 2,
      amount: "3 cup",
      name: "cheese",
    },
    {
      id: 3,
      amout: "45 onces",
      name: "Italian Sauce",
    },
  ];

  const ingredientList = ingredients.map((ingredient) => (
    <AddIngredientBox
      key={ingredient.id}
      ingredient={ingredient}
    ></AddIngredientBox>
  ));
  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <a class="recipeSite" href="https://www.allrecipes.com">
        Original Site Link
      </a>
      {ingredientList}
    </header>
  );
};

export default Recipe;