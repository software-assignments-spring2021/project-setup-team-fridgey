import React from "react";
import "./AddIngredientBox.css";
import axios from "axios"
import { useState } from "react";
const AddIngredientBox = (props) => {

const fridgeData = require("../data/mock_recipes.json");
const itemList=[]
for (let i=0;i<fridgeData.length;i++){
  for (let j=0;j<fridgeData[i].length;j++){
    itemList.push(fridgeData[i][j].title)
  }
}

const [addButton, setAddButton] = useState("+");
// const itemList=myItems.map((myItems)=>{return myItems.title})
if (itemList.includes(props.name)){
  return (
    <div class="box">
      <p class="text"> <span class="haveIt">{props.name}</span> </p>
      <button class="ingredientButton" onClick={() => 
      axios.post("/addIngredientToSL", {name: props.name})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })}>         {addButton}      </button>
    </div>
  );
  
}
else {
  return (
    <div class="box">
      <p class="text"><span style={{color:"red"}}>{props.name}</span> </p>
      
      <button class="ingredientButton" onClick={() => {
      axios.post("/addIngredientToSL", {"name":
        props.name
    })
      .then(res => {
        console.log(res);
      });setAddButton("\u2713")}}>         {addButton}     </button>
    </div>
  )
}}

export default AddIngredientBox
