import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    const amount = props.amount
    var newDay = false

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
        if(newDay) {
            // gets the amount
            var pressedAmount = document.getElementById("FoodItemModal-chips").getElementsByClassName("chip pressed")[0].innerHTML
            // gets the notes
            var notesTaken = document.getElementById("notes").value
            // gets the days left
            var useWithin = document.getElementById("use-within").value
            
            props.parentCallback(pressedAmount, useWithin, notesTaken)
            event.preventDefault()
        } else {
            props.onClose()
            reset()
            event.preventDefault()
        }
    }

    // displays text in freshness circle
    const freshnessText = (daysLeft) => {
        var text = ""

        if(daysLeft >= 5) {
            text = "Still Fresh"
        } else if(daysLeft >= 3) {
            text = "Use Soon"
        } else {
            text = "Throw Out"
        }

        return text
    }

    // displays progress of ellipse
    const freshnessEllipse = (daysLeft) => {
        var className = ""

        if(daysLeft >= 5) {
            className = "fresh-ellipse"
        } else if(daysLeft >= 3) {
            className = "halfFresh-ellipse"
        } else {
            className = "notFresh-ellipse"
        }

        return className
    }

    // renders the daysleft and notes
    const renderInput = () => {
        if(document.getElementById("use-within") != null) {
            document.getElementById("use-within").value = updateDate(props.daysleft)
            // document.getElementById("use-within").value = props.daysleft
        }
        if(document.getElementById("notes") != null) {
            document.getElementById("notes").value = props.notes
        }
    }

    // converts the created date into text format
    const convertDate = (date) => {
        var str = date.substring(0, 10).split("-")
        var month
        var day = str[2]
        var year = str[0]

        if(str[1] === "01") {
            month = "January"
        } else if(str[1] === "02") {
            month = "February"
        } else if(str[1] === "03") {
            month = "March"
        } else if(str[1] === "04") {
            month = "April"
        } else if(str[1] === "05") {
            month = "May"
        } else if(str[1] === "06") {
            month = "June"
        } else if(str[1] === "07") {
            month = "July"
        } else if(str[1] === "08") {
            month = "August"
        } else if(str[1] === "09") {
            month = "September"
        } else if(str[1] === "10") {
            month = "October"
        } else if(str[1] === "11") {
            month = "November"
        } else if(str[1] === "12") {
            month = "December"
        }

        var newDate = month + " " + day + ", " + year
        return newDate
    }

    // updates the daysleft if a day has passed
    const updateDate = (daysleft) => {
        if(daysleft == 0) {
            return daysleft;
        }
        
        // today's date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        var date1 = new Date(mm + '/' + dd + '/' + yyyy)
        // last updated date
        var str = props.updatedAt.substring(0, 10).split("-")
        var date2 = new Date(str[1] + '/' + str[2] + '/' + str[0])

        // difference between days
        const diffTime = Math.abs(date2 - date1)
        var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if(diff > 0) {
            daysleft = daysleft - diff
            newDay = true
        }

        return daysleft
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
                                <div className={freshnessEllipse(updateDate(props.daysleft))}>
                                    <div className="white-ellipse">
                                        <p className="freshness-text">{freshnessText(updateDate(props.daysleft))}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Freshness-data">
                            <div className="Use-Within">
                                <h5 className="FoodItemModal-text">Use Within</h5>
                                <div className="days-left">
                                    <input id="use-within" type="number" min={0} max={65} defaultValue={updateDate(props.daysleft)}/>
                                    <p className="FoodItemModal-text" id="days">Days</p>
                                </div>
                            </div>
                            
                            <div className="Date-Added">
                                <h5 className="FoodItemModal-text">Date Added</h5>
                                <p className="FoodItemModal-text">{convertDate(props.dateadded)}</p>
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