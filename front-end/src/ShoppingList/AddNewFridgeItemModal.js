import { React } from "react";
import "./AddNewFridgeItemModal.css";

const AddNewFridgeItemModal = (props) => {
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
                        <textarea className="itemName" placeholder="Enter your grocery here"></textarea>
                    </div>

                    <div className="NewFridgeItemModal-amount">
                        <h5 className="NewFridgeItemModal-text">How Much?</h5>
                        <button className={`chip chip-Lots`}>Lots</button>
                        <button className={`chip chip-Some`}>Some</button>
                        <button className={`chip chip-Few`}>Few</button>
                    </div>

                    <div className="NewFridgeItemModal-type">
                        <h5 className="NewFridgeItemModal-text">What Type?</h5>
                        <button className={`chip chip-food`}>Fruit</button>
                        <button className={`chip chip-food`}>Meat</button>
                        <button className={`chip chip-food`}>Dairy</button>
                        <button className={`chip chip-food`}>Grain</button>
                    </div>

                    <div className="NewFridgeItemModal-notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
                        {/* <textarea></textarea> */}
                    </div>
                </div>

                <div className="AddNewFridgeItemModal-footer">
                    <button onClick={props.onAddToShoppingList}>Add to Shopping List</button> 
                </div>
            </div>
        </div>
    );
};

export default AddNewFridgeItemModal;
