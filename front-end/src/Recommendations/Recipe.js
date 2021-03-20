import React,{useState,useEffect} from "react";
import AddIngredientBox from "../AddIngredientBox";
import BackButton from "../BackButton";
import "./Recipe.css";
import "./App.css";
import WebpageModal from"./WebpageModal"

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

  const [show,setShow]=useState(false)

  const ingredientList = ingredients.map((ingredient) => (
    <AddIngredientBox
      key={ingredient.id}
      ingredient={ingredient}
    />
  ));
  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <button class="recipeSite" onClick={()=>setShow(true)}>
        Original Article
      </button>
      <WebpageModal  onClose={()=>setShow(false)}show={show} />
      {ingredientList}
      
    </header>
    
  );
};

export default Recipe;