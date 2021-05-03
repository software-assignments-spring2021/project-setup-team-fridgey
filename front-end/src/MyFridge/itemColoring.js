import React from "react";

// these are all functions!!
export const dot = (days) => {
  return (
    <span
      className={`dot ${
        days < 1 ? "dotRed" : days >= 1 && days <= 3 ? "dotYellow" : "dotGreen"
      }`}
    ></span>
  );
};

export const chipDays = (days) => {
  return (
    <p
      className={`chip chipFilled ${
        days < 1
          ? "chipRed"
          : days >= 1 && days <= 3
          ? "chipYellow"
          : "chipGreen"
      }`}
    >
      {days === 0 ? "Throw Out" : days === 1 ? days + " Day" : days + " Days"}{" "}
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
