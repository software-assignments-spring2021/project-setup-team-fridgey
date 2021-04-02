import NavBar from "../NavBar";
import "./Recommendations.css";
import {GeneratePaper} from "./Recommendations"
import {HeaderButtons} from "./Recommendations"
import {GenerateData} from "./Recommendations"

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