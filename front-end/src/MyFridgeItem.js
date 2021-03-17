import React, { useState } from "react";
import { dot, chipDays, chipAmount } from "./itemColoring";
import { groups, fruits, grains, dairy, meats } from "./fridgeDataFake";
import "./MyFridge.css";
import Modal from "./deleteModal";

const MyFridgeItem = (props) => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("Hello");
  const [itemId, setItemId] = useState(0);

  const rowEvent = (event) => {
    const title = event.currentTarget.getAttribute("title");
    const id = event.currentTarget.getAttribute("id");
    // https://stackoverflow.com/questions/43335452/pass-item-data-to-a-react-modal
    setItemName(title);
    setItemId(id);
    setShow(true);
  };

  const onDelete = (groups, updateFruits) => {
    // countItems(groups);
    let matchIndex = parseInt(itemId);
    for (let i = 0; i < groups.length; i++) {
      var removeIndex = groups[i].object
        .map(function (item) {
          //   alert("Item ID is " + item.id + 1);
          return parseInt(item.id);
        })
        .indexOf(matchIndex);
      if (removeIndex !== -1) {
        // alert("Group is " + groups[i].object[0].id);
        groups[i].object.splice(removeIndex, 1);
        updateFruits();

        // alert("Group is " + groups[i].object[0].id);
        // setItemCount(itemCount - 1);
      }
    }
  };

  return (
    // elements for the table
    <tbody>
      <tr>
        <td>
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
      <Modal
        onClose={() => setShow(false)}
        show={show}
        onDelete={() => onDelete(groups, props.updateFruits)}
        itemName={itemName}
      />
    </tbody>
  );
};

export default MyFridgeItem;
