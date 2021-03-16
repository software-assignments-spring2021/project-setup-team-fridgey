import React, { useState } from "react";
import "./MyFridge.css";
import { groups } from "./fridgeDataFake";
import { dot, chipDays, chipAmount } from "./itemColoring";
import Modal from "./deleteModal";

const MyFridge = (props) => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("Hello");
  const [itemId, setItemId] = useState(0);

  const renderItem = (data, j) => {
    const rowEvent = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      // https://stackoverflow.com/questions/43335452/pass-item-data-to-a-react-modal
      setItemName(title);
      setItemId(id);
      setShow(true);
    };

    const onDelete = (itemInput, groups) => {
      let matchIndex = parseInt(itemId);
      for (let i = 0; i < groups.length; i++) {
        var removeIndex = groups[i].object
          .map(function (item) {
            return item.id;
          })
          .indexOf(matchIndex);
        if (removeIndex !== -1) {
          groups[i].object.splice(removeIndex, 1);
        }
      }
    };

    // dot, chipAmount, and chipDays can be found in itemColoring.js
    return (
      <tbody key={j}>
        <tr>
          <td>
            <span>{dot(data.daysleft)}</span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, data.daysleft)}</span>
            <span>{chipDays(data.daysleft)}</span>
          </td>
          <td>
            <button
              title={data.title}
              id={data.id}
              amount={data.amount}
              daysleft={data.daysleft}
              onClick={rowEvent}
            >
              x
            </button>
          </td>
        </tr>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          onDelete={() => onDelete(data, groups)}
          itemName={itemName}
        />
      </tbody>
    );
  };

  // groups is an object in fridgeDataFake.js
  return (
    <div>
      {groups.map((item, i) => (
        <div key={i}>
          <h2 className="header">{item.header}</h2>
          <table>{item.object.map(renderItem)}</table>
        </div>
      ))}
    </div>
  );
};

// make this available to other modules as an import
export default MyFridge;
