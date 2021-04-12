import React,{useState,useEffect,useWindowDimensions} from "react";
import AddIngredientBox from "./AddIngredientBox";
import BackButton from "./BackButton";
import "./Recipe.css";
import "../App.css";
import WebpageModal from"./WebpageModal"
import axios from 'axios';

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
  
  // const recipes = require("../data/mock_recipes.json");
  // const dish = search(recipes, props.location.state.name); //Big Night Pizza as demo, replaced by props.name later
   
  const recipe=props.location.state.name;
  const ingredientList = recipe.ingredients.map((ingredient) => <AddIngredientBox
    name={ingredient.name}
  > </AddIngredientBox>);




  //  const [data, setData] = useState([])
  // const [load, setLoad] = useState(true);
  // const [name,setName]=useState('');
  // const [ingredients, setIngredients] = useState([]);
  // const [imgURL, setImgURL] = useState('');
  // const [originalURL, setOriginalURL] = useState('');

  


  // const requestRecipe=async()=>{
  //   const items=axios.get("/getRecipe")

  // items.then(response => {
    
  //   console.log(response.data.recipe.name)
  //   console.log(response.data.recipe.ingredients)
  //   console.log(response.data.recipe.imageURL)
  //   console.log(ingredients)
  //   setName(response.data.recipe.name)
  //   setImgURL(response.data.recipe.imageURL)
  //   setOriginalURL(response.data.recipe.originalURL)
  //   setIngredients(response.data.recipe.ingredients)
  // })

  // };
  // useEffect(() => {
  //   requestRecipe();
  // },[])
    
  


  // console.log(ingredients)
  // const ingredientList=(ingredients).map((ingredient)=><AddIngredientBox 
  //   name={ingredient.name}>
  // </AddIngredientBox>)

  

  
  const [show, setShow] = useState(false);

  return (
    <header className="App-header">
      <BackButton />
      <br></br>
      <p id="dishname">{recipe.name}</p>
      <button class="recipeSite" >
        <img className = "recipe-img" src={recipe.imageURL} onClick={() => setShow(true)}></img>
      </button>
      <WebpageModal orginalURL={recipe.originalURL} onClose={() => setShow(false)} show={show} />
      {ingredientList}

    </header>

  );
}

export default Recipe;