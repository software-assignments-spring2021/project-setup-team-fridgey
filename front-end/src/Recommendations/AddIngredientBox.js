import React from "react";
import "./AddIngredientBox.css";

const AddIngredientBox = (props) => {
  const myItems=[{
    id:1,
    title:"egg",

  },
  {
    id:2,
    title:"banana",
  },
]
const itemList=myItems.map((myItems)=>{return myItems.title})
if (itemList.includes(props.ingredient.name)){
  return (
    <div class="box">
      <p>{props.ingredient.amount + " "} <span class="haveIt">{props.ingredient.name}</span> </p>
      <button class="ingredientButton">+</button>
    </div>
  );
  
}
else {
  return (
    <div class="box">
      <p>{props.ingredient.amount + " "}<span style={{color:"red"}}>{props.ingredient.name}</span> </p>
      <button class="ingredientButton">+</button>
    </div>
  )
}}

export default AddIngredientBox
