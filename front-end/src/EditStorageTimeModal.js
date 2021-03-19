import React from "react";
import "./Modal.css";

const EditStorageModal = (props) => {
  return (
    <div
    className={`modal ${props.show ? "show" : ""}`}
    onClick={props.onClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}</div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default EditStorageModal;
