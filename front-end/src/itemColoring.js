import React from "react";

export const dot = (days) => {
  return (
    <span
      class={`dot ${
        days < 2 ? "dotRed" : days >= 2 && days < 6 ? "dotYellow" : "dotGreen"
      }`}
    ></span>
  );
};

export const chipDays = (days) => {
  return (
    <p
      class={`chip chipFilled ${
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
      class={`chip ${
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

/* IF ELSE VERSION */
// if (days < 2) {
//   return <span class="dot dotRed"></span>;
// } else if (days >= 2 && days < 6) {
//   return <span class="dot dotYellow"></span>;
// } else {
//   return <span class="dot dotGreen"></span>;
// }

/* IF ELSE VERSION */
// if (days < 2) {
//   return (
//     <p class="chip chipFilled chipRed"> {days === 0 ? "Throw Out" : days + " Days"} </p>
//   );
// } else if (days >= 2 && days < 6) {
//   return <p class="chip chipFilled chipYellow"> {days + " Days"}</p>;
// } else {
//   return <p class="chip chipFilled chipGreen"> {days + " Days"}</p>;
// }

/* IF ELSE VERSION */
// if (amount === "Lots") {
//   return <p class="chip chipLots"> {amount}</p>;
// } else if (amount === "Some") {
//   return <p class="chip chipSome"> {amount}</p>;
// } else {
//   return <p class="chip chipFew"> {amount}</p>;
// }
