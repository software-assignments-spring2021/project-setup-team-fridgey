import React from "react";
import "./deleteModal.css";

const deleteModal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Delete Item Confirmation</h4>
        </div>

        <div className="modal-body">
          Are You Sure You Want to Delete {props.itemName}?
        </div>

        <div className="modal-footer">
          <button onClick={props.onDelete} className="button">
            Delete
          </button>
          <button onClick={props.onClose} className="button">
            Cancel
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default deleteModal;
