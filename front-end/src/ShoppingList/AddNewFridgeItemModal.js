import { React } from "react";
import "./AddNewFridgeItemModal.css";

const AddNewFridgeItemModal = (props) => {
    var pressedAmount = "Lots"

    const changeData = () => {
        var pressed = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip pressed")
        var unpressed = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip unpressed")

        console.log(pressed)
        console.log("HAHS")
        console.log(unpressed)
    }

    const grabInformation = (event) => {
        var itemName = document.getElementById("itemName").value;
        var amount = document.getElementById("NewItemAmount-chips").getElementsByClassName("chip pressed")[0].innerHTML
        // var amount = amountElements[0].innerHTML
        var type = document.getElementById("NewItemType-chips").getElementsByClassName("chip pressed")[0].innerHTML
        // var type = typeElements[0].innerHTML

        if(type === "Fruits") {
            type = 0;
        } else if(type === "Dairy") {
            type = 1;
        } else if(type === "Grains") {
            type = 2;
        } else if(type === "Meat") {
            type = 3;
        }

        onTrigger(itemName, amount, type);
        event.preventDefault();
    }

    const onTrigger = (name, amount, type) => {
        props.parentCallback(name, amount, type)
    }

    return (
        <div className={`AddNewFridgeItemModal ${props.show ? "show" : ""}`}>
            <div className="AddNewFridgeItemModal-content">
                <div className="AddNewFridgeItemModal-header">
                    <h4 className="AddNewFridgeItemModal-title">Add New Item</h4>
                    <button onClick={props.onClose}>x</button>
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
                                onClick={changeData} 
                                className={`chip chip-Lots ${(pressedAmount === "Lots") ? "pressed" : "unpressed"}`}
                            >
                            Lots
                            </button>
                            <button 
                                onClick={changeData}
                                className={`chip chip-Some ${(pressedAmount === "Some") ? "pressed" : "unpressed"}`}
                            >
                            Some
                            </button>
                            <button
                                onClick={changeData} 
                                className={`chip chip-Few ${(pressedAmount === "Few") ? "pressed" : "unpressed"}`}
                            >
                            Few
                            </button>
                        </div>
                    </div>

                    <div className="NewFridgeItemModal-type">
                        <h5 className="NewFridgeItemModal-text">What Type?</h5>
                        <div id="NewItemType-chips">
                            <button className={`chip chip-food`}>Fruit</button>
                            <button className={`chip chip-food pressed`}>Meat</button>
                            <button className={`chip chip-food`}>Dairy</button>
                            <button className={`chip chip-food`}>Grain</button>
                        </div>
                    </div>

                    <div className="NewFridgeItemModal-notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
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
