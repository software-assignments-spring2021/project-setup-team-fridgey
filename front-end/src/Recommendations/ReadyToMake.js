import NavBar from "../NavBar";
import "./Recommendations.css";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"
import {RecItem} from "./Recommendations"

const recommendationData = 
[
  {
    title: "Classic Lasagna",
    ingredients: "7",
    minutes: 60,
    image: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg",
  },
  {
    title: "Koran Pork Chops",
    ingredients: "7",
    minutes: 60,
    image: "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg",
  },
  {
    title: "Marsala",
    ingredients: "13",
    minutes: 55,
    image: "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg",
  },
  {
    title: "Low Carb Skillet",
    ingredients: "7",
    minutes: 60,
    image: "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg",
  },
  {
      title: "Indian Cauliflower",
      ingredients: "7",
      minutes: 60,
      image: "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg",
  },
  {
      title: "Oven-Baked Chicken",
      ingredients: "7",
      minutes: 60,
      image: "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg",
    },
];

const GenerateData = (data) => {
  return(
    recommendationData.map((recipe) => (
      <RecItem title = {recipe.title} ingredients = {recipe.ingredients} minutes = {recipe.minutes} image = {recipe.image}/>
    )
  ));
};

const ReadyToMake = (props) => {
  return(
  <div>
    <NavBar/>
    <header className="App-header">
      <h1>Recommendations</h1>
      <HeaderButtons first = "recommendations-unusedButton" second = "recommendations-usedButton" third = "recommendations-unusedButton"/>
      <GeneratePaper>
        <GenerateData/>
      </GeneratePaper>
    </header>
  </div> 
);
  };

export { ReadyToMake };