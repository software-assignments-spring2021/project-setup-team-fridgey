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
import { RecipesOfTheDay } from "./Recommendations/RecipesOfTheDay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./MyFridge/MyFridge";
import { ReadyToMake } from "./Recommendations/ReadyToMake";
import { SavedRecipes } from "./Recommendations/SavedRecipes";
import Recipe from "./Recommendations/Recipe";
import { ShoppingList } from "./ShoppingList/ShoppingList";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Login/SignupPage";
import axios from "axios";
import { useState, useEffect } from "react";


// the app itself and the links for everything
// the components are at the bottom and they are simply the pages and its contents
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(data);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ShoppingList" exact component={ShoppingList} />
          <Route
            path="/Storage-Time-Search"
            exact
            component={StorageTimeSearch}
          />
          <Route path="/RecipesOfTheDay" exact component={RecipesOfTheDay} />
          <Route path="/ReadyToMake" exact component={ReadyToMake} />
          <Route path="/SavedRecipes" exact component={SavedRecipes} />
          <Route path="/Recipe" component={Recipe} />
          <Route
            path="/Storage-Time-Search/List"
            component={StorageTimeSearchList}
          />
          <Route
            path="/Storage-Time-Search/ListFruits"
            render = {() => <StorageTimeSearchListFruits data={items}/>}
          />
          <Route
            path="/Storage-Time-Search/ListMeats"
            render = {() => <StorageTimeSearchListMeats data={items}/>}
          />
          <Route
            path="/Storage-Time-Search/ListDairy"
            render = {() => <StorageTimeSearchListDairy data={items}/>}
          />
          <Route
            path="/Storage-Time-Search/ListGrain"
            render = {() => <StorageTimeSearchListGrain data={items}/>}
          />
          <Route
            path="/Login"
            component={LoginPage}
          />
          <Route
            path="/Signup"
            component={SignupPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
