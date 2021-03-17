import React, { useState } from "react";
import { dot, chipDays, chipAmount } from "./itemColoring";
import { groups } from "./fridgeDataFake";
import "./MyFridge.css";
import DeleteModal from "./deleteModal"
import FoodItemModal from "./FoodItemModal"

const MyFridgeItem = (props) => {
  // FoodItemModal useState's
  const [showItemModal, setShowItemModal] = useState(false)
  const [itemModalName, setItemModalName] = useState("Hello") // why hello
  const [itemModalId, setItemModalId] = useState(0) // why 0

  // DeleteModal useState's
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("Hello");
  const [itemId, setItemId] = useState(0);
  
  // FoodItemModal event handler
  const itemEvent = (event) => {
    const title = event.currentTarget.getAttribute("title")
    const id = event.currentTarget.getAttribute("id");
    setItemModalName(title)
    setItemModalId(id)
    setShowItemModal(true)
  }



  
  // DeleteModal event handler
  const rowEvent = (event) => {
    const title = event.currentTarget.getAttribute("title");
    const id = event.currentTarget.getAttribute("id");
    // https://stackoverflow.com/questions/43335452/pass-item-data-to-a-react-modal
    setItemName(title);
    setItemId(id);
    setShow(true);
  };

  const onDelete = (groups) => {
    let matchIndex = parseInt(itemId);
    for (let i = 0; i < groups.length; i++) {
      var removeIndex = groups[i].object
        .map(function (item) {
          return parseInt(item.id);
        })
        .indexOf(matchIndex);
      if (removeIndex !== -1) {
        groups[i].object.splice(removeIndex, 1);
      }
    }
  };

  return (
    // elements for the table
    <tbody>
      <tr>
        <td 
          title={props.food.title}
          id={props.food.id}
          onClick={itemEvent}
        >
          {/* we will use the functions from itemColoring */}
          {/* and the css from MyFridge.css */}
          <span>{dot(props.food.daysleft)}</span>
          <span className="title">{props.food.title}</span>
          <span>{chipAmount(props.food.amount, props.food.daysleft)}</span>
          <span>{chipDays(props.food.daysleft)}</span>
        </td>
        <td>
          <button
            title={props.food.title}
            id={props.food.id}
            amount={props.food.amount}
            daysleft={props.food.daysleft}
            onClick={rowEvent}
          >
            x
          </button>
        </td>
      </tr>
      <DeleteModal
        onClose={() => setShow(false)}
        show={show}
        onDelete={() => onDelete(groups)}
        itemName={itemName}
      />
      <FoodItemModal
        onClose={() => setShowItemModal(false)}
        show={showItemModal}
        itemName={itemModalName}
      />
    </tbody>
  );
};

export default MyFridgeItem;
