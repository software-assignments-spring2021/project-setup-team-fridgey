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
                    <div className="FoodItemModal-info">
                        <div className="Fresh-bar">
                            <div className="ellipse">
                                <div className="white-ellipse">
                                    <p className="freshness-ellipse">Still fresh</p>
                                </div>
                            </div>
                        </div>

                        <div className="Fresh-dates">
                            <h5>Use Within</h5>
                            <select id="use-within">
                                <option value="seven">7 Days</option>
                                <option value="six">6 Days</option>
                                <option value="five">5 Days</option>
                                <option value="four">4 Days</option>
                                <option value="three">3 Days</option>
                                <option value="two">2 Days</option>
                                <option value="one">1 Day</option>
                            </select>
                        </div>
                        
                        <div className="Date-Added">
                            <h5>Date Added</h5>
                            <p>February 26, 2020</p>
                        </div>
                    </div>   
    
                    <div className="FoodItemModal-Chips">
                        <h5 className="how-much">How Much?</h5>
                        <button className="chip chipLots">Lots</button>
                        <button className="chip chipSome">Some</button>
                        <button className="chip chipFew">Few</button>
                    </div>

                    <div className="FoodItemModal-Notes">
                        <label for="nt" className="headline">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="FoodItemModal-footer">
                    <button>Add to Shopping List</button> 
                    <button onClick={props.onClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal