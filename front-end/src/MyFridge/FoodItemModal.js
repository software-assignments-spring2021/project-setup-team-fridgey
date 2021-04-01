import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    const amount = props.amount

    const reset = () => {
        document.getElementById("notes").value = ""
        var amountChips = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip")

        for(var i in amountChips) {
            if(amountChips.hasOwnProperty(i)) {
                var name = amountChips[i].innerHTML
                
                if(name === amount) {
                    amountChips[i].className = "chip chip-" + name + " pressed"
                } else {
                    amountChips[i].className = "chip chip-" + name + " unpressed"
                }
            }
        }
    }

    const changeData = (data) => {
        var pressedAmount = data
        var chips = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip")

        for(var i in chips) {
            if(chips.hasOwnProperty(i)) {
                var name = chips[i].innerHTML
                
                if(pressedAmount === name) {
                    chips[i].className = "chip chip-" + name + " pressed"
                } else {
                    chips[i].className = "chip chip-" + name + " unpressed"
                }
            }
        }
    }

    const grabInformation = (event) => {
        // "Lots", "Some", "Few"
        var pressedAmount = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip pressed")[0].innerHTML

        props.parentCallback(pressedAmount, props.type, props.id)
        reset()
        event.preventDefault()
    }

    const closeModal = () => {
        reset()
        props.onClose()
    }

    const freshnessText = (daysLeft) => {
        var text = ""

        if(daysLeft >= 5) {
            text = "Still Fresh"
        } else if(daysLeft >= 1) {
            text = "Use Soon"
        } else {
            text = "Throw Out"
        }

        return text
    }

    const freshnessEllipse = (daysLeft) => {
        var className = ""

        if(daysLeft >= 5) {
            className = "fresh-ellipse"
        } else if(daysLeft >= 1) {
            className = "halfFresh-ellipse"
        } else {
            className = "notFresh-ellipse"
        }

        return className
    }

    return (
        <div 
            className={`FoodItemModal ${props.show ? "show" : ""}`}
        > 
            <div className="FoodItemModal-content">
                <div className="FoodItemModal-header">
                    <h4 className="FoodItemModal-title">{props.itemName}</h4>
                    <button onClick={closeModal}>x</button>
                </div>

                <div className="FoodItemModal-body"> 
                    <div className="FoodItemModal-info">
                        <div className="Fresh-bar">
                            <div className="background-ellipse">
                                <div className={freshnessEllipse(props.daysleft)}>
                                    <div className="white-ellipse">
                                        <p className="freshness-text">{freshnessText(props.daysleft)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="Freshness-data">
                            <div className="Use-Within">
                                <h5 className="FoodItemModal-text">Use Within</h5>
                                <button className="use-within">{`${props.daysleft} Days`}</button>
                            </div>
                            
                            <div className="Date-Added">
                                <h5 className="FoodItemModal-text">Date Added</h5>
                                <p className="FoodItemModal-text">{props.dateadded}</p>
                            </div>
                        </div>
                    </div>   
    
                    <div className="FoodItemModal-Amount">
                        <h5 className="FoodItemModal-text">How Much?</h5>
                        <div id="FoodItemModal-chips">
                            <button
                                className={`chip chip-Lots ${(amount == "Lots") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Lots")}
                            >
                            Lots
                            </button>

                            <button
                                className={`chip chip-Some ${(amount == "Some") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Some")}
                            >
                            Some
                            </button>

                            <button
                                className={`chip chip-Few ${(amount == "Few") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Few")}
                            >
                            Few
                            </button>
                        </div>
                    </div>

                    <div className="FoodItemModal-Notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <textarea id="notes" className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="FoodItemModal-footer">
                    <button>Add to Shopping List</button> 
                    <button onClick={grabInformation}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal