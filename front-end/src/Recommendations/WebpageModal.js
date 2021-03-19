
import React from "react";
import "./WebpageModal.css";

const WebpageModal = (props) => {
    
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
          <embed  src="https://www.spendwithpennies.com/fluffy-homemade-waffle-recipe/" width="450" height="500"></embed>
        </div>
        
      </div>
      </div>
      </div>
  )

}


export default WebpageModal;