import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./StorageTimeSearch.css";
import { useState } from "react";

const StorageTimeSearch = () => {
  const items = [
    {name: "Apple"},
    {name: "Pear"},
    {name: "Grapes"},
    {name: "Chicken"},
    {name: "Pork"},
    {name: "Beef"},
    {name: "Milk"},
    {name: "Ice cream"},
    {name: "Cheese"},
    {name: "Whole wheat bread"},
    {name: "Oatmeal"},
    {name: "Rice"}
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [focusSearch, setFocusSearch] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const changeClass = () => {
    setFocusSearch("StorageTime-Remove");
  };

  const revertClass = () => {
    setFocusSearch(null);
  };

  if (focusSearch === "StorageTime-Remove") {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <h1>Storage Time Search</h1>
  
          <input type="text" placeholder="Search for food" onChange={ handleChange } onClick={ changeClass } onBlur={ revertClass } id="StorageTime-Searchbar"/>
            
            { items.filter((item) => {
              if (searchTerm === "") {
                return item
              } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item
              } else {
                return null
              }
              }).map((item) => {
                if (searchTerm !== "") {
                  return (
                    <div>
                      <Button>{item.name}</Button>
                    </div>
                  );
                } else {
                  return (<p/>);
                }
              }) 
            }
          </header>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <h1>Storage Time Search</h1>
  
          <input type="text" placeholder="Search for food" onChange={ handleChange } onClick={ changeClass } onBlur={ revertClass } id="StorageTime-Searchbar"/>
  
          <div>
            <p id="StorageTime-Description">
              Browse through some common foods to see our recommended storage 
              times and edit the default storage settings however you like!
            </p>
            <Grid container direction="row" justify="center">
              <Link to="/Storage-Time-Search/ListFruits">
                <Grid item>
                  <Button variant="contained" className="StorageTime-TopRow" id="StorageTime-Button1">
                    Fruits
                  </Button>
                </Grid>
              </Link>
              <Link to="/Storage-Time-Search/ListMeats">
                <Grid item>
                  <Button variant="contained" className="StorageTime-TopRow" id="StorageTime-Button2">
                    Meats
                  </Button>
                </Grid>
              </Link>
            </Grid>
            <Grid container direction="row" justify="center">
              <Link to="/Storage-Time-Search/ListDairy">
                <Grid item>
                  <Button variant="contained" className="StorageTime-BottomRow" id="StorageTime-Button3">
                    Dairy
                  </Button>
                </Grid>
              </Link>
              <Link to="/Storage-Time-Search/ListGrain">
                <Grid item>
                  <Button variant="contained" className="StorageTime-BottomRow" id="StorageTime-Button4">
                    Grain
                  </Button>
                </Grid>
              </Link>
            </Grid>
          </div>
        </header>
      </div>
    );
  };
};

export { StorageTimeSearch };