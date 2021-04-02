import { React } from "react";
import "../Modal.css";

const AddToFridgeModal = (props) => {
  return (
    <div className={`modal ${props.show ? "show" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Item Confirmation</h4>
        </div>

        <div className="modal-body">
          Are You Sure You Want to Add these Items?
        </div>

        <div className="modal-footer">
          <button onClick={props.onAddToFridge} className="button">
            Add
          </button>
          <button onClick={props.onClose} className="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToFridgeModal;
