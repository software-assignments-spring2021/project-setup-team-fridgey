import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    const amount = props.amount
    const notes = props.notes

    // resets progress
    const reset = () => {
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
    
    // change the chips
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

    // gets called everytime we save
    const savedInformation = (event) => {
        // gets the amount
        var pressedAmount = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip pressed")[0].innerHTML
        // gets the notes
        var notesTaken = document.getElementById("notes").value
        // gets the days left
        var useWithin = document.getElementById("use-within").value
        
        props.parentCallback(pressedAmount, useWithin, notesTaken)
        event.preventDefault()
    }

    // grabs the information to add to shopping list
    const grabInfo = (event) => {
        var pressedAmount = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip pressed")[0].innerHTML
        var notesTaken = document.getElementById("notes").value

        props.addItemToShoppingList(props.itemName, pressedAmount, props.type, notesTaken)
        event.preventDefault()
    }

    // closes modal and resets progress
    const closeModal = (event) => {
        props.onClose()
        reset()
        event.preventDefault()
    }

    // displays text in freshness circle
    const freshnessText = (daysLeft) => {
        var text = ""

        if(daysLeft >= 3) {
            text = "Still Fresh"
        } else if(daysLeft >= 1) {
            text = "Use Soon"
        } else {
            text = "Throw Out"
        }

        return text
    }

    // displays progress of ellipse
    const freshnessEllipse = (daysLeft) => {
        var className = ""

        if(daysLeft >= 3) {
            className = "fresh-ellipse"
        } else if(daysLeft >= 1) {
            className = "halfFresh-ellipse"
        } else {
            className = "notFresh-ellipse"
        }

        return className
    }

    // renders the daysleft and notes
    const renderInput = () => {
        if(document.getElementById("use-within") != null) {
            document.getElementById("use-within").value = props.daysleft
        }
        if(document.getElementById("notes") != null) {
            document.getElementById("notes").value = props.notes
        }
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
                                <input id="use-within" type="number" min={0} max={65} defaultValue={props.daysleft}/>
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
                                className={`chip chip-Lots ${(amount === "Lots") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Lots")}
                            >
                            Lots
                            </button>

                            <button
                                className={`chip chip-Some ${(amount === "Some") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Some")}
                            >
                            Some
                            </button>

                            <button
                                className={`chip chip-Few ${(amount === "Few") ? "pressed" : "unpressed"}`}
                                onClick={() => changeData("Few")}
                            >
                            Few
                            </button>
                        </div>
                    </div>
                    <div className="FoodItemModal-Notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <form>
                            <textarea id="notes" className="Notes" placeholder="This item is for...">{props.notes}</textarea>
                        </form>
                    </div>
                </div>
                <div className="FoodItemModal-footer">
                    <button onClick={grabInfo}>Add to Shopping List</button> 
                    <button onClick={savedInformation}>Save</button>
                </div>
            </div>
            {renderInput()}
        </div>
    )
}

export default FoodItemModal