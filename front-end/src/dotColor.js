import React from "react";

export const dot = (days) => {
  if (days < 2) {
    return <span class="dot dotRed"></span>;
  } else if (days >= 2 && days < 6) {
    return <span class="dot dotYellow"></span>;
  } else {
    return <span class="dot dotGreen"></span>;
  }
};

export const chipDays = (days) => {
  if (days < 2) {
    return <p class="chip chip2 chipRed"> {days + " Days"}</p>;
  } else if (days >= 2 && days < 6) {
    return <p class="chip chip2 chipYellow"> {days + " Days"}</p>;
  } else {
    return <p class="chip chip2 chipGreen"> {days + " Days"}</p>;
  }
};
