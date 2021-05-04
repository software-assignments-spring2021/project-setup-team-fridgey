import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "./StorageTimeSearch.css";
import { useEffect, useState } from "react";
import axios from "axios";
import fruits from "./images/fruits.png";
import meats from "./images/meats.png";
import dairy from "./images/dairy.png";
import grain from "./images/grain.png";
import StorageItem from "./StorageItem";

const StorageTimeSearch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    const axiosResult = await axios.get(
      "/http://157.245.131.216:3001/storagetimeitems"
    );
    let data = await axiosResult.data;
    setItems(...[data]);
  };

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
          <form autoComplete="off">
            <input
              type="text"
              placeholder="Search for food"
              onChange={handleChange}
              onClick={changeClass}
              id="StorageTime-Searchbar"
            />
          </form>
          <Button onClick={revertClass}>Back</Button>
          {items
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              } else {
                return null;
              }
            })
            .map((item) => {
              if (searchTerm !== "") {
                return (
                  <div>
                    <StorageItem key={item.id} item={item}></StorageItem>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <h1>Storage Time Search</h1>

          <input
            type="text"
            placeholder="Search for food"
            onChange={handleChange}
            onClick={changeClass}
            onBlur={revertClass}
            id="StorageTime-Searchbar"
          />

          <div>
            <p id="StorageTime-Description">
              Browse through some common foods to see our recommended storage
              times and edit the default storage settings however you like!
            </p>
            <Grid container direction="row" justify="center">
              <Link
                to="/Storage-Time-Search/ListFruits"
                className="StorageTime-Link"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    className="StorageTime-TopRow"
                    id="StorageTime-Button1"
                  >
                    Fruits
                    <img src={fruits} height="40" width="40" alt="fruit" />
                  </Button>
                </Grid>
              </Link>
              <Link
                to="/Storage-Time-Search/ListMeats"
                className="StorageTime-Link"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    className="StorageTime-TopRow"
                    id="StorageTime-Button2"
                  >
                    Meats
                    <img src={meats} height="40" width="40" alt="meat" />
                  </Button>
                </Grid>
              </Link>
            </Grid>
            <Grid container direction="row" justify="center">
              <Link
                to="/Storage-Time-Search/ListDairy"
                className="StorageTime-Link"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    className="StorageTime-BottomRow"
                    id="StorageTime-Button3"
                  >
                    Dairy
                    <img src={dairy} height="40" width="40" alt="dairy" />
                  </Button>
                </Grid>
              </Link>
              <Link
                to="/Storage-Time-Search/ListGrain"
                className="StorageTime-Link"
              >
                <Grid item>
                  <Button
                    variant="outlined"
                    className="StorageTime-BottomRow"
                    id="StorageTime-Button4"
                  >
                    Grain
                    <img src={grain} height="37" width="40" alt="grain" />
                  </Button>
                </Grid>
              </Link>
            </Grid>
          </div>
        </header>
      </div>
    );
  }
};

export default StorageTimeSearch;
