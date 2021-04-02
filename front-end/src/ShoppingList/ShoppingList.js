import React, { useState } from "react";
import NavBar from "../NavBar";
import ShoppingList_welcome from "./ShoppingList.png";
import "./ShoppingList.css";
import { chipAmount } from "../MyFridge/itemColoring";
import DeleteModal from "../MyFridge/deleteModal";
import AddToFridgeModal from "./AddToFridgeModal";
import { itemCount } from "../MyFridge/CountFridgeItems";
import { compileAddToFridgeItems } from "./AddToFridgeItems";
import { AddToFridge } from "./AddToFridge";
const shopData = require("../data/shoppingListMockData.json");
const fridgeData = require("../data/fridgeMockData.json");

const ShoppingListView = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemId, setShoppingItemId] = useState(0);
  const [shoppingType, setShoppingType] = useState(0);
  const [showAddtoFridge, setShowAddtoFridge] = useState(false);
  const [showFridgeModal, setShowFridgeModal] = useState(false);

  // Deleting from Shopping List
  const onDelete = (data, id, type) => {
    let matchIndex = parseInt(id);
    var removeIndex = data[type][1]
      .map(function (item) {
        return item.id;
      })
      .indexOf(matchIndex);
    if (removeIndex !== -1) {
      data[type][1].splice(removeIndex, 1);
      setShowDelete(false);
    }
  };
  // Adding Items to Fridge and Deleting from Shopping List
  const onAddToFridge = () => {
    let AddData = compileAddToFridgeItems();
    let data = Object.entries(shopData[0]);
    for (let i = 0; i < AddData.length; i++) {
      Object.entries(fridgeData[0])[AddData[i].type][1].push(AddData[i]);
      onDelete(data, AddData[i].id, AddData[i].type);
    }
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setShowFridgeModal(false);
    setShowAddtoFridge(false);
  };
  // Displaying Add to Fridge Button if a Checkbox is Marked
  function onCheck() {
    let allEmpty = true;
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        allEmpty = false;
      }
    });
    if (allEmpty === true) {
      setShowAddtoFridge(false);
    } else {
      setShowAddtoFridge(true);
    }
  }
  // Select All Checkboxes
  function toggle(source, name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let input = document.querySelectorAll(`input[name="${source}"]`)[0];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked !== input.checked) {
        checkbox.checked = input.checked;
      }
    });
    onCheck(); // So Add to Fridge button also appears
  }

  const renderItem = (data) => {
    // Handling Delete Click
    const deleteClick = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      const type = event.currentTarget.getAttribute("type");
      setShoppingItemName(title);
      setShoppingItemId(id);
      setShoppingType(type);
      setShowDelete(true);
    };

    return (
      <tbody>
        <tr>
          <td>
            <span className="Shop-Checkbox">
              <input
                type="checkbox"
                name="itemCheckbox"
                food={data.type}
                value={data.title}
                id={data.id}
                amount={data.amount}
                date={data.dateadded}
                onClick={() => onCheck()}
              />
            </span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, 1)}</span>
          </td>
          <td>
            <button
              title={data.title}
              id={data.id}
              type={data.type}
              onClick={deleteClick}
            >
              x
            </button>
          </td>
        </tr>
        <DeleteModal
          onClose={() => setShowDelete(false)}
          show={showDelete}
          onDelete={() =>
            onDelete(Object.entries(shopData[0]), shoppingItemId, shoppingType)
          }
          itemName={shoppingItemName}
        />
      </tbody>
    );
  };

  return (
    <div>
      <div
        className={`Shop-Box ${
          itemCount(Object.entries(shopData[0])) === 0 ? "Shop-Hide" : ""
        }`}
      >
        <div>
          <table className="SelectAll-table">
            <tr>
              <td className="SelectAll-td">
                <span className="Shop-Checkbox">
                  <input
                    type="checkbox"
                    name="selectAll"
                    onClick={() => toggle("selectAll", "itemCheckbox")}
                  />
                </span>
                <span>Select All</span>
              </td>
            </tr>
          </table>
        </div>
        {Object.entries(shopData[0]).map((item, i) => (
          <div key={i}>
            <h2 className="header">{JSON.parse(JSON.stringify(item[0]))}</h2>
            <table>{item[1].map(renderItem)}</table>
          </div>
        ))}
      </div>
      <div
        className={
          itemCount(Object.entries(shopData[0])) === 0 ? "" : "Shop-Hide"
        }
      >
        <h2 className="Shop-Welcome">Welcome to Your Shopping List!</h2>
        <img
          src={ShoppingList_welcome}
          alt="ShoppingList-Welcome"
          width="300"
          height="270"
        />
        <p className="Shop-Welcome-Msg">
          Start adding items using the add button! :)
        </p>
      </div>
      <div className="center">
        <AddToFridge
          showAddtoFridge={showAddtoFridge}
          onClick={() => setShowFridgeModal(true)}
        />
      </div>
      <AddToFridgeModal
        onClose={() => setShowFridgeModal(false)}
        show={showFridgeModal}
        onAddToFridge={() => onAddToFridge()}
      />
    </div>
  );
};

const ShoppingList = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1 className="Shop-Header">Shopping List</h1>
      <ShoppingListView />
    </header>
  </div>
);

// make this available to other modules as an import
export { ShoppingList };

// function getSelectedCheckboxValues(name) {
//   const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
//   checkboxes.forEach((checkbox) => {
//     values.push(checkbox.checked);
//     // console.log(checkbox.checked);
//   });
//   // for (let i = 0; i < values.length; i++) {
//   //   console.log(values[i]);
//   // }
//   return values;
// }

// function buttonAlert() {
//   alert(getSelectedCheckboxValues("itemCheckbox"));
// }
