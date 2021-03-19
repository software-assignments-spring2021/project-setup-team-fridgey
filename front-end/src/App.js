import React from "react"
import logo from "./logo.svg";
import "./App.css";
import "./StorageTimeSearch/Item.css";
import {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListGrain,
  StorageTimeSearchListMeats,
} from "./StorageTimeSearch/StorageTimeSearchListGroups";
import {StorageTimeSearch} from "./StorageTimeSearch/StorageTimeSearch";
import {Recommendations} from "./Recommendations/Recommendations";
import NavBar from "./NavBar";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyFridge from "./MyFridge/MyFridge";
import { ReadyToMake } from "./Recommendations/ReadyToMake";
import { SavedRecipes } from "./Recommendations/SavedRecipes";
import EditStorageModal from "./StorageTimeSearch/EditStorageTimeModal";
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
          <Route 
            path="/ReadyToMake" 
            exact component={ReadyToMake}
          />
          <Route 
            path="/SavedRecipes" 
            exact component={SavedRecipes}
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

// the general structure for a storage time search list
// includes a back link for every list
export const StorageTimeSearchList = (props) => {
  return (
    <div>
      <button className="StorageBackButton">
        <Link to="/Storage-Time-Search">Back</Link>
      </button>
      <h1 className="Food-Group">{props.title}</h1>
    </div>
  );
};

// the general structure for every item within the list (button)
// includes an item name, spoil time, and default time
// uses a popup function when clicked
export const StorageItem = ({ item, key }) => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(true)} className="Storage-Item">
        {/* <img className="ItemStorageImage" src={item.img} alt='pic'></img> */}
        <text className="Item-name">{item.name}</text>
        <div className="All-time">
          <text className="Spoil-time">Recommended</text>
          <div className="Storage-Days">{item.shortTime}-{item.longTime} days</div>
          <text className="Default-time">Default</text>
          <div className="Storage-Days">{item.defaultTime} days</div>
        </div>
      </button>
      <EditStorageModal title={item.name} onClose={() => setShow(false)} show={show}>
        <ul>
          <li>Shorter: {item.shortTime} days</li>
          <li>Average: {item.averageTime} days</li>
          <li>Longer: {item.longTime} days</li>
        </ul>
      </EditStorageModal>
    </div>
  )
}


export default App;
