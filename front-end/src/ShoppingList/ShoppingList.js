import React, { useState } from "react";
import NavBar from "../NavBar";
import welcome_pic from "../MyFridge/MyFridge-Welcome-Pic.png";
import "./ShoppingList.css";

const ShoppingListView = (props) => {
  const renderItem = () => {
    return (
      <tbody>
        <tr>
          <td>
            <span>Apple</span>
          </td>
          <td>
            <button>x</button>
          </td>
        </tr>
      </tbody>
    );
  };

  let a = false;
  return (
    <div>
      <div className={a ? "ShoppingList-Hide" : ""}>
        <table>{renderItem()}</table>
      </div>
      <div className={a ? "" : "ShoppingList-Hide"}>
        <h2> Welcome to Your Shopping List!</h2>
        <img
          src={welcome_pic}
          alt="MyFridge-Welcome"
          width="300"
          height="270"
        />
        <p className="ShoppingList-Welcome-Msg">
          Start adding items using the add button! :)
        </p>
      </div>
    </div>
  );
};
// the home page with the items and the stuff at the bottom
const ShoppingList = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1>Shopping List</h1>
      <ShoppingListView />
    </header>
  </div>
);

// make this available to other modules as an import
export { ShoppingList };
