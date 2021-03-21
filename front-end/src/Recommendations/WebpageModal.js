
import React from "react";
import "./WebpageModal.css";

function search(source, title) {
  let index=0;
  let entry=null;

  title = title.toUpperCase();
  for (index = 0; index < source.length; ++index) {
      entry = source[index];
      if ( entry.name.toUpperCase()==title) {
          return entry;
      }
  }
}

const WebpageModal = (props) => {

  const recipes = require("../data/mock_recipes.json");
  const dish = search(recipes, "Roasted Asparagus");
    
  return (
    <div
    className={`modal ${props.show ? "show" : ""}`}
    onClick={props.onClose}
  >
    <div classNmae="modal"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button className="back" onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body">
          <embed  src={dish.originalURL} width="450" height="500"></embed>
        </div>
        
      </div>
      </div>
      </div>
  )

}


export default WebpageModal;