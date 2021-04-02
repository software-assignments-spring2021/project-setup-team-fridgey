import React from "react";
import "../Modal.css";

export const AddToFridge = (props) => {
  return (
    <button
      className={`${props.showAddtoFridge ? "float" : "AddtoFridge-Hide"}`}
      onClick={props.onClick}
    >
      Add to Fridge
    </button>
  );
};
