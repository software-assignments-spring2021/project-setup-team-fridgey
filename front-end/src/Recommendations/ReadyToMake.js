import NavBar from "../NavBar";
import "./Recommendations.css";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"
import {RecItem} from "./Recommendations"

const GenerateData = (data) => {
  return(
    <div>
      <RecItem title = "Classic Lasagna" ingredients = "7" minutes = "60" image = "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg"/>
      <RecItem title = "Korean Pork Chops" ingredients = "7" minutes = "60" image = "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg"/>
      <RecItem title = "Chicken Marsala" ingredients = "7" minutes = "60" image = "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg"/>
      <RecItem title = "Classic Lasagna" ingredients = "7" minutes = "60" image = "https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg"/>
      <RecItem title = "Korean Pork Chops" ingredients = "7" minutes = "60" image = "https://www.jocooks.com/wp-content/uploads/2015/03/korean-style-pork-chops-2.jpg"/>
      <RecItem title = "Chicken Marsala" ingredients = "7" minutes = "60" image = "https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg"/>
    </div>
  );
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