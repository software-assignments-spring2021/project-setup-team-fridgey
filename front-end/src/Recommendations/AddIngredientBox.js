import React from "react";
import "./AddIngredientBox.css";

const AddIngredientBox = (props) => {
//   const myItems=[{
//     id:1,
//     title:"olive oil",

//   },
//   {
//     id:2,
//     title:"banana",
//   },
// ]
const fridgeData = require("../data/mock_recipes.json");
const itemList=[]
for (let i=0;i<fridgeData.length;i++){
  for (let j=0;j<fridgeData[i].length;j++){
    itemList.push(fridgeData[i][j].title)
  }
}
// const itemList=myItems.map((myItems)=>{return myItems.title})
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
