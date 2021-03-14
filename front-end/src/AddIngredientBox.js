import React from "react";
import "./AddIngredientBox.css";

const AddIngredientBox = (props) => {
  return (
    <div class="box">
      <p>{props.ingredient.amount + " " + props.ingredient.name}</p>
      <button class="ingredientButton">+</button>
    </div>
  );
};

export default AddIngredientBox;
