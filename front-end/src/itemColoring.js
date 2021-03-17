import React from "react";

// the css page for this is MyFridge.css

// these are all functions!!

export const dot = (days) => {
  return (
    <span
      className={`dot ${
        days < 2 ? "dotRed" : days >= 2 && days < 6 ? "dotYellow" : "dotGreen"
      }`}
    ></span>
  );
};

export const chipDays = (days) => {
  return (
    <p
      className={`chip chipFilled ${
        days < 2
          ? "chipRed"
          : days >= 2 && days < 6
          ? "chipYellow"
          : "chipGreen"
      }`}
    >
      {days === 0 ? "Throw Out" : days + " Days"}{" "}
    </p>
  );
};

export const chipAmount = (amount, days) => {
  return (
    <p
      className={`chip ${
        days === 0
          ? "noChip"
          : amount === "Lots"
          ? "chipLots"
          : amount === "Some"
          ? "chipSome"
          : "chipFew"
      }`}
    >
      {amount}
    </p>
  );
};
