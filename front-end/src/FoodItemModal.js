import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    return (
        <div 
            className={`FoodItemModal ${props.show ? "show" : ""}`}
            onClick={props.onClose}
        > 
            <div className="FoodItemModal-content" onClick={e => e.stopPropagation()}>
                <div className="FoodItemModal-header">
                    <h4 className="FoodItemModal-title">{props.itemName}</h4>
                </div>
                <div className="FoodItemModal-body">
                    This is the content
                </div>
                <div className="FoodItemModal-footer">
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal