
import React from "react";
import "./WebpageModal.css";



const WebpageModal = (props) => {

  return (
    <div
    className={`webModal ${props.show ? "show" : ""}`}
    onClick={props.onClose}
  >
    <div classNmae="webModal"
    >
      <div className="webModal-content">
        <div className="webModal-header">
          <button className="back" onClick={props.onClose}>X</button>
        </div>
        <div className="webModal-body">
          <embed  src={props.originalURL} width="450" height="500"></embed>
        </div>
        
      </div>
      </div>
      </div>
  )

}


export default WebpageModal;