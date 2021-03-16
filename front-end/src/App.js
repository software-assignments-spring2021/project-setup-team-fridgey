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
import NavBar from "./NavBar";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyFridge from "./MyFridge";
import EditStoragePopup from "./EditStorageTimePopup";
import { useState } from 'react';

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
            component={Recommendations}
          />
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

const Home = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1> Fridgey </h1>
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

export const Item = ({ item, key }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <button className="Item" onClick={() => setButtonPopup(true)}>
        <img className="Item-img" src={item.img}></img>
        <text className="Item-name">{item.name}</text>
        <text className="Spoil-time">Recommended {item.spoilTime} days</text>
        <text className="Default-time">Default {item.defaultTime} days</text>
        <EditStoragePopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>{item.name}</h3>
          <p>Shorter {item.shortTime} days</p>
          <p>Average {item.averageTime} days</p>
          <p>Longer {item.longTime} days</p>
        </EditStoragePopup>
      </button>
      <button className="Line"></button>
    </div>
  );
};

const Recommendations = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1>Yuh</h1>
    </header>
  </div>
);

export default App;
