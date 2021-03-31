import React from "react"
import "./FoodItemModal.css";

const FoodItemModal = (props) => {
    var amount = props.amount
    console.log(props.id)

    // id = the FoodItemModal id (total of 12: 0-11)
    // data = "Lots", "Some", "Few"
    const changeData = (id, data) => {
        amount = data
        var elements = document.getElementsByClassName("FoodItemChip")

        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                
                // if(elements.id = id) {
                //     console.log("AH")
                // }

            }
        }

        // console.log(data)
        // if(data === "Some") {
        //     element = document.getElementById("chip-" + data)
        //     element.id = "chip-" + data + "-pressed"
        // } else if(data === "Few") {

        // } else if(data === "Lots") {

        // }
        // console.log("chip-" + data)
        // element = document.getElementById("chip-" + data)
        // // console.log(element)
        // element.id = "chip-" + data + "-pressed"
        // console.log(element.id)


        // amount = data

        // for (var i in elements) {
        //     if (elements.hasOwnProperty(i)) {
        //         elements[i].className = data + ' pressed';
        //     }
        // }

        // for (var i in elements) {
        //     if(elements.hasOwnProperty(i)) {
        //         if(elements[i].className !== data) {
        //             // var ele
        //         }
        //     }
        // }
    }

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
                            <div className="Use-Within">
                                <h5 className="FoodItemModal-text">Use Within</h5>
                                <button className="use-within">{`${props.daysLeft} Days`}</button>
                            </div>
                            
                            <div className="Date-Added">
                                <h5 className="FoodItemModal-text">Date Added</h5>
                                <p className="FoodItemModal-text">February 20, 2021</p>
                            </div>
                        </div>
                    </div>   
    
                    <div className="FoodItemModal-Amount">
                        <h5 className="FoodItemModal-text">How Much?</h5>
                        <div className="FoodItemModal-Chips">
                            <button 
                                id={props.id}
                                className={`FoodItemChip chip-Lots ${(amount === "Lots") ? "pressed" : ""}`}
                                onClick={() => changeData(props.id, "Lots")}>Lots</button>
                            <button 
                                id={props.id}
                                className={`FoodItemChip chip-Some ${(amount === "Some") ? "pressed" : ""}`}
                                onClick={() => changeData(props.id, "Some")}>Some</button>
                            <button 
                                id={props.id}
                                className={`FoodItemChip chip-Few ${(amount === "Few") ? "pressed" : ""}`}
                                onClick={() => changeData(props.id, "Few")}>Few</button>
                        </div>
                    </div>

                    <div className="FoodItemModal-Notes">
                        <label htmlFor="nt" className="headline">Notes</label>
                        <textarea className="Notes" placeholder="This item is for..."></textarea>
                    </div>
                </div>

                <div className="FoodItemModal-footer">
                    <button >Add to Shopping List</button> 
                    <button onClick={props.onClose}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default FoodItemModal