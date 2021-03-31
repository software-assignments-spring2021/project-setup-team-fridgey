import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    return (
        <div 
            className={`FoodItemModal ${props.show ? "show" : ""}`}
        > 
            <div className="FoodItemModal-content">
                <div className="FoodItemModal-header">
                    <h4 className="FoodItemModal-title">{props.itemName}</h4>
                    <button onClick={props.onClose}>x</button>
                </div>

                <div className="FoodItemModal-body">  
                    <div className="FoodItemModal-info">
                        <div className="Fresh-bar">
                            <div className="background-ellipse">
                                <div className="fresh-ellipse">
                                    <div className="white-ellipse">
                                        <p className="freshness-text">Still fresh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Freshness-data">
                            <div className="Use-date">
                                <h5 className="FoodItemModal-text">Use Within</h5>
                                <button className="use-within">{`${props.daysLeft} Days`}</button>
                            </div>
                            
                            <div className="Date-Added">
                                <h5 className="FoodItemModal-text">Date Added</h5>
                                <p className="FoodItemModal-text">{props.dateAdded}</p>
                            </div>
                        </div>
                    </div>   
    
                    <div className="FoodItemModal-Chips">
                        <h5 className="FoodItemModal-text">How Much?</h5>
                        <button className={`chip chip-Lots ${(props.amount === "Lots") ? "pressed" : ""}`}>Lots</button>
                        <button className={`chip chip-Some ${(props.amount === "Some") ? "pressed" : ""}`}>Some</button>
                        <button className={`chip chip-Few ${(props.amount === "Few") ? "pressed" : ""}`}>Few</button>
                    </div>

                    <div className="FoodItemModal-Notes">
                        <label for="nt" className="headline">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="FoodItemModal-footer">
                    <button onClick={props.onClose}>Add to Shopping List</button> 
                    <button onClick={props.onClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal