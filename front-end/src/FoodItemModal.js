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
                    <button onClick={props.onClose}>x</button>
                </div>

                <div className="FoodItemModal-body">   
                    <div className="FoodItemModal-Freshness">
                        
                    </div>      
                    <div className="FoodItemModal-Chips">
                        <h5>How Much?</h5>
                        <button>Lots</button>
                        <button>Some</button>
                        <button>Few</button>
                    </div>
                    <button>Add to Shopping List</button>  
                    <div className="FoodItemModal-Notes">
                        <label for="nt">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="FoodItemModal-footer">
                    <button onClick={props.onClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal