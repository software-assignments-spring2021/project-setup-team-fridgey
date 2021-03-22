import React from "react";
import "./StorageTimeSearchList.css";
import "./StorageTimeSearch.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "@material-ui/core/Button";

// the general structure for a storage time search list
// includes a back link for every list
const StorageTimeSearchList = (props) => {
  const items = [
    { name: "Apple" },
    { name: "Pear" },
    { name: "Grapes" },
    { name: "Chicken" },
    { name: "Pork" },
    { name: "Beef" },
    { name: "Milk" },
    { name: "Ice cream" },
    { name: "Cheese" },
    { name: "Whole wheat bread" },
    { name: "Oatmeal" },
    { name: "Rice" },
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
        <button className="storage-back-button">
          <Link to="/Storage-Time-Search">Back</Link>
        </button>
        <div className="searchlist-search-bar">
          <input
            type="text"
            placeholder="Search for food"
            onChange={handleChange}
            onClick={changeClass}
            onBlur={revertClass}
            id="StorageTime-Searchbar"
          />
        </div>
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
                  <Button>{item.name}</Button>
                </div>
              );
            } else {
              return <p />;
            }
          })}
        <h1 className="food-group">{props.title}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <button className="storage-back-button">
          <Link to="/Storage-Time-Search">Back</Link>
        </button>
        <div className="searchlist-search-bar">
          <input
            type="text"
            placeholder="Search for food"
            onChange={handleChange}
            onClick={changeClass}
            onBlur={revertClass}
            id="StorageTime-Searchbar"
          />
        </div>
        <text>edit storage times</text>
        <h1 className="food-group">{props.title}</h1>
      </div>
    );
  }
};

export default StorageTimeSearchList;
