import React from "react";
import "./ShoppingList.css";

export const AddButton = (props) => {
  return (
    <button 
      className={`${props.showAddtoFridge  ? "addButton-Hide" : "add-button"}`}
      onClick={props.onClick}
    >
    </button>
  );
};
