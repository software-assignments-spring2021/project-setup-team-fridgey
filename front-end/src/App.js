import React from "react";
import "./App.css";
import "./StorageTimeSearch/StorageItem.css";
import {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListGrain,
  StorageTimeSearchListMeats,
} from "./StorageTimeSearch/StorageTimeSearchListGroups";
import StorageTimeSearchList from "./StorageTimeSearch/StorageTimeSearchList";
import StorageTimeSearch from "./StorageTimeSearch/StorageTimeSearch";
import {Recommendations} from "./Recommendations/Recommendations";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyFridge, Home } from "./MyFridge/MyFridge";
import { ReadyToMake } from "./Recommendations/ReadyToMake";
import { SavedRecipes } from "./Recommendations/SavedRecipes";
import Recipe from "./Recommendations/Recipe";

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
            exact
            component={StorageTimeSearch}
          />
          <Route path="/Recommendations" exact component={Recommendations} />
          <Route path="/ReadyToMake" exact component={ReadyToMake} />
          <Route path="/SavedRecipes" exact component={SavedRecipes} />
          <Route path="/Recipe" component={Recipe} />
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

export default App;
