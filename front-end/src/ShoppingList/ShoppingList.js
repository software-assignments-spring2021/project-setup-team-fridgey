import React, { useState } from "react";
import NavBar from "../NavBar";
// the home page with the items and the stuff at the bottom
const ShoppingList = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1>Shopping List</h1>
    </header>
  </div>
);

// make this available to other modules as an import
export { ShoppingList };
