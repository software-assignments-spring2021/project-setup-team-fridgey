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

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  };

  return (
    <div>
      <NavBar />
      <header className="App-header">
        <h1>Storage Time Search</h1>

        <input type="text" placeholder="Search for food" onChange={handleChange}/>

        { items.filter((item) => {
          if (searchTerm == "") {
            return item
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
          }
          }).map((item) => {
            if (searchTerm != "") {
              return (
              <div>
                <p>{item.name}</p>
              </div>
              );
            }
          }) 
        }
        

        <Grid container direction="row" justify="center" className="TopRow">
          <Link to="/Storage-Time-Search/ListFruits">
            <Grid item>
              <Button variant="contained" className="GridButton" id="Button1">
                Fruits
              </Button>
            </Grid>
          </Link>
          <Link to="/Storage-Time-Search/ListMeats">
            <Grid item>
              <Button variant="contained" className="GridButton">
                Meats
              </Button>
            </Grid>
          </Link>
        </Grid>
        <Grid container direction="row" justify="center">
          <Link to="/Storage-Time-Search/ListDairy">
            <Grid item>
              <Button variant="contained" className="GridButton" id="Button2">
                Dairy
              </Button>
            </Grid>
          </Link>
          <Link to="/Storage-Time-Search/ListGrain">
            <Grid item>
              <Button variant="contained" className="GridButton">
                Grain
              </Button>
            </Grid>
          </Link>
        </Grid>
      </header>
    </div>
  );
};

export { StorageTimeSearch };