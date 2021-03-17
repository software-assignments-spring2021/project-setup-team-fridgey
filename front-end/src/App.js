import React from "react"
import logo from "./logo.svg";
import "./App.css";
import "./Item.css";
import {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListGrain,
  StorageTimeSearchListMeats,
} from "./StorageTimeSearchListGroups";
import {StorageTimeSearch} from "./StorageTimeSearch";
import {Recommendations} from "./Recommendations";
import NavBar from "./NavBar";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyFridge from "./MyFridge";
import EditStoragePopup from "./EditStorageTimePopup";
import { useState } from 'react';

// the app itself and the links for everything
// the components are at the bottom and they are simply the pages and its contents
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/Storage-Time-Search"
            exact component={StorageTimeSearch}
          />
          <Route 
            path="/Recommendations" 
            exact component={Recommendations}
          />
          <Route path="/Recommendations" 
          exact component={Recommendations} />
          <Route
            path="/Storage-Time-Search/List"
            component={StorageTimeSearchList}
          />
          <Route
            path="/Storage-Time-Search/ListFruits"
            component={StorageTimeSearchListFruits}
          />
          <Route
            path="/Storage-Time-Search/ListMeats"
            component={StorageTimeSearchListMeats}
          />
          <Route
            path="/Storage-Time-Search/ListDairy"
            component={StorageTimeSearchListDairy}
          />
          <Route
            path="/Storage-Time-Search/ListGrain"
            component={StorageTimeSearchListGrain}
          />
        </Switch>
      </Router>
    </div>
  );
}




// the home page with the items and the stuff at the bottom
const Home = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1 className="fridgey">MyFridge</h1>
      <MyFridge />

      <img src={logo} className="App-logo" alt="logo" />
      <p>Fridgey</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export const StorageTimeSearchList = (props) => {
  return (
    <div>
      <Link to="/Storage-Time-Search">Back</Link>
      <h1>{props.title}</h1>
    </div>
  );
};

export const StorageItem = ({ item, key }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    // <div className="Temp">
      <button className="Storage-Item" onClick={() => setButtonPopup(true)}>
        {/* <img className="Item-img" src={item.img}></img> */}
        <h4 className="Item-name">{item.name}</h4>
        <div className="Storage-Days">
          <text className="Spoil-time">Recommended</text>
          <div className="Storage-Days">{item.spoilTime} days</div>
          <text className="Default-time">Default</text>
          <div className="Storage-Days">{item.defaultTime} days</div>
        </div>
        <EditStoragePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{item.name}</h3>
          <p>Shorter {item.shortTime} days</p>
          <p>Average {item.averageTime} days</p>
          <p>Longer {item.longTime} days</p>
        </EditStoragePopup>
      </button>
      // {/* <button className="Line"></button> */}
    // </div>
  );
};


export default App;
