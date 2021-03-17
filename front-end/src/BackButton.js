import React from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import "./BackButton.css";

const BackButton = () => {
  const [redirctTo, setRedirctTo] = useState(false); // your state value to manipulate

  if (redirctTo) {
    return <Redirect to="/Recommendations" />;
  } else {
    return (
      <button class="backButton" onClick={() => setRedirctTo(true)}>
        Back
      </button>
    );
  }
};

export default BackButton;
