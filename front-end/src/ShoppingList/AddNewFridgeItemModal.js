import { React } from "react";
import "./AddNewFridgeItemModal.css";

const AddNewFridgeItemModal = (props) => {

    const reset = () => {
        document.getElementById("itemName").value = ""
        document.getElementById("notes").value = ""
        var amountChips = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip")
        var typeChips = document.getElementById("NewItemType-chips").getElementsByClassName("chip")

        for(var i in amountChips) {
            if(amountChips.hasOwnProperty(i)) {
                var name = amountChips[i].innerHTML
                
                if(name === "Lots") {
                    amountChips[i].className = "chip chip-" + name + " pressed"
                } else {
                    amountChips[i].className = "chip chip-" + name + " unpressed"
                }
            }
        }
        
        for(var i in typeChips) {
            if(typeChips.hasOwnProperty(i)) {
                var name = typeChips[i].innerHTML
                
                if(name === "Fruit") {
                    typeChips[i].className = "chip chip-food pressed"
                } else {
                    typeChips[i].className = "chip chip-food unpressed"
                }
            }
        }
    }
    
    const changeData = (typeChips, data) => {
        var pressedAmount = data

        if(typeChips === "amount") {
            var chips = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip")

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
        } else {
            var chips = document.getElementById("NewItemType-chips").getElementsByClassName("chip")

            for(var i in chips) {
                if(chips.hasOwnProperty(i)) {
                    var name = chips[i].innerHTML
                    
                    if(pressedAmount === name) {
                        chips[i].className = "chip chip-food pressed"
                    } else {
                        chips[i].className = "chip chip-food unpressed"
                    }
                }
            }
        }
    }

    const grabInformation = (event) => {
        var itemName = document.getElementById("itemName").value;
        var amount = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip pressed")[0].innerHTML
        var type = document.getElementById("NewItemType-chips").getElementsByClassName("chip pressed")[0].innerHTML

        if(type === "Fruit") {
            type = 0;
        } else if(type === "Dairy") {
            type = 1;
        } else if(type === "Grain") {
            type = 2;
        } else if(type === "Meat") {
            type = 3;
        }

        reset()
        props.parentCallback(itemName, amount, type)
        reset()
        event.preventDefault();
    }

    const closeModal = () => {
        reset()
        props.onClose()
    }

    return (
        <div className={`AddNewFridgeItemModal ${props.show ? "show" : ""}`}>
            <div className="AddNewFridgeItemModal-content">
                <div className="AddNewFridgeItemModal-header">
                    <h4 className="AddNewFridgeItemModal-title">Add New Item</h4>
                    <button onClick={closeModal}>x</button>
                </div>

                <div className="AddNewFridgeItemModal-body">
                    <div className="NewFridgeItemModal-itemName">
                        <label htmlFor="nt" className="headline">Item</label>
                        <textarea className="itemName" id="itemName" placeholder="Enter your grocery here"></textarea>
                    </div>

                    <div className="NewFridgeItemModal-amount">
                        <h5 className="NewFridgeItemModal-text">How Much?</h5>

                        <div id="NewItemAmount-chips">
                            <button 
                                onClick={() => changeData("amount", "Lots")} 
                                // className={`chip chip-Lots ${(pressedAmount === "Lots") ? "pressed" : "unpressed"}`}
                                className={`chip chip-Lots pressed`}
                            >
                            Lots
                            </button>

                            <button 
                                onClick={() => changeData("amount", "Some")}
                                // className={`chip chip-Some ${(pressedAmount === "Some") ? "pressed" : "unpressed"}`}
                                className={`chip chip-Some unpressed`}
                            >
                            Some
                            </button>

                            <button
                                onClick={() => changeData("amount", "Few")} 
                                // className={`chip chip-Few ${(pressedAmount === "Few") ? "pressed" : "unpressed"}`}
                                className={`chip chip-Few unpressed`}
                            >
                            Few
                            </button>
                        </div>
                    </div>

                    <div className="NewFridgeItemModal-type">
                        <h5 className="NewFridgeItemModal-text">What Type?</h5>
                        <div id="NewItemType-chips">
                            <button 
                                onClick={() => changeData("type", "Fruit")}
                                className={`chip chip-food pressed`}
                            >
                            Fruit
                            </button>

                            <button 
                                onClick={() => changeData("type", "Meat")}
                                className={`chip chip-food unpressed`}
                            >
                            Meat
                            </button>

                            <button 
                                onClick={() => changeData("type", "Dairy")}
                                className={`chip chip-food unpressed`}
                            >
                            Dairy
                            </button>

                            <button 
                                onClick={() => changeData("type", "Grain")}
                                className={`chip chip-food unpressed`}
                            >
                            Grain
                            </button>
                        </div>
                    </div>

                    <div className="NewFridgeItemModal-notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <textarea id="notes" className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="AddNewFridgeItemModal-footer">
                    <button onClick={grabInformation}>Add to Shopping List</button> 
                </div>
            </div>
        </div>
    );
};

export default AddNewFridgeItemModal;
