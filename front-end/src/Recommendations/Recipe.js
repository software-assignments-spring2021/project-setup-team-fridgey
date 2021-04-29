import React,{useState, useEffect} from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "../App.css";
import WebpageModal from"./WebpageModal"
import axios from 'axios';

let pantryItems = ["Water" ,"Ice" ,"Flour" ,"Sugar","Cane Sugar" ,"Cooking Fat" ,"Cooking Oil" ,"Vegetable Oil" ,"Black Pepper" ,"Salt"];

// function search(source, title) {
//   let index=0;
//   let entry=null;

//   title = title.toUpperCase();
//   for (index = 0; index < source.length; ++index) {
//       entry = source[index];
//       if ( entry.name.toUpperCase()==title) {
//           return entry;
//       }
//   }
// }



//////temp code
function Recipe(props) {

  const requestMyIngredients=async()=>{
    const items=axios.get("/getMyIngredients")
  
  items.then(response => {
    
    console.log(response.id)
  })
  
  };
  useEffect(() => {
    requestMyIngredients();
  },[])
  /////////temp code

  const itemsCall = async () => {
    let a = await axios.get("/fridgeData");
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
  

  const itemList=[]
  const [fridgeData, setFridgeData] = useState([]);
  console.log(fridgeData)
  for (let i=0;i<fridgeData.length;i++){
    for (let j=0;j<fridgeData[i][1].length;j++){
      itemList.push(fridgeData[i][1][j].title)
    }
  }
  
  for(let i=0;i<pantryItems.length;i++){
    itemList.push(pantryItems[i])
  }
  //console.log(itemList);

  // data for MyFridge
  
  
  // const recipes = require("../data/mock_recipes.json");
  // const dish = search(recipes, props.location.state.name); //Big Night Pizza as demo, replaced by props.name later
   
  const recipe=props.location.state.name;
  const ingredientList = recipe.ingredients.map((ingredient) => 
  
    <AddIngredientBox
    name={(ingredient.ingredientName==null ? ingredient.name : ingredient.ingredientName)} list={itemList}
  > </AddIngredientBox>
)

  

  
  const [show, setShow] = useState(false);

  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <p id="dishname">{recipe.name}</p>
      <button class="recipeSite" >
        <img alt="" className = "recipe-img" src={recipe.imageURL} onClick={() => setShow(true)}></img>
      </button>
      <WebpageModal originalURL={recipe.originalURL} onClose={() => setShow(false)} show={show} />
      {ingredientList}

    </header>

  );
}

export default Recipe;