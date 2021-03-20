import React from "react";
import "./AddIngredientBox.css";

const AddIngredientBox = (props) => {
  const myItems=[{
    id:1,
    title:"olive oil",

  },
  {
    id:2,
    title:"banana",
  },
]
const itemList=myItems.map((myItems)=>{return myItems.title})
if (itemList.includes(props.name)){
  return (
    <div class="box">
      <p> <span class="haveIt">{props.name}</span> </p>
      <button class="ingredientButton">+</button>
    </div>
  );
  
}
else {
  return (
    <div class="box">
      <p><span style={{color:"red"}}>{props.name}</span> </p>
      <button class="ingredientButton">+</button>
    </div>
  )
}}

export default AddIngredientBox
