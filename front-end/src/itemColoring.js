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

// export const dot = (days) => {
//   return (
//     <span
//       className={`dot ${
//         days < 2 ? "dotRed" : days >= 2 && days < 6 ? "dotYellow" : "dotGreen"
//       }`}
//     ></span>
//   );
// };

// export const chipDays = (days) => {
//   return (
//     <p
//       className={`chip chipFilled ${
//         days < 2
//           ? "chipRed"
//           : days >= 2 && days < 6
//           ? "chipYellow"
//           : "chipGreen"
//       }`}
//     >
//       {days === 0 ? "Throw Out" : days + " Days"}{" "}
//     </p>
//   );
// };

// export const chipAmount = (amount, days) => {
//   return (
//     <p
//       className={`chip ${
//         days === 0
//           ? "noChip"
//           : amount === "Lots"
//           ? "chipLots"
//           : amount === "Some"
//           ? "chipSome"
//           : "chipFew"
//       }`}
//     >
//       {amount}
//     </p>
//   );
// };
