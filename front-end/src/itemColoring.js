import React from "react";

// the css page for this is MyFridge.css

// these are all functions!!
export const dot = (days) => {
  if (days < 2) {
    return <span className="dot dotRed"></span>;
  } else if (days >= 2 && days < 6) {
    return <span className="dot dotYellow"></span>;
  } else {
    return <span className="dot dotGreen"></span>;
  }
};

export const chipDays = (days) => {
  if (days < 2) {
    return <p className="chip chipFilled chipRed"> {days + " Days"}</p>;
  } else if (days >= 2 && days < 6) {
    return <p className="chip chipFilled chipYellow"> {days + " Days"}</p>;
  } else {
    return <p className="chip chipFilled chipGreen"> {days + " Days"}</p>;
  }
};

export const chipAmount = (amount) => {
  if (amount === "Lots") {
    return <p className="chip chipLots"> {amount}</p>;
  } else if (amount === "Some") {
    return <p className="chip chipSome"> {amount}</p>;
  } else {
    return <p className="chip chipFew"> {amount}</p>;
  }
};
