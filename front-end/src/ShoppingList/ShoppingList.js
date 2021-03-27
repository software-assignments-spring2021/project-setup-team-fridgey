import React, { useState } from "react";
import NavBar from "../NavBar";
import ShoppingList_welcome from "./ShoppingList.png";
import "./ShoppingList.css";
import { chipAmount } from "../MyFridge/itemColoring";
import DeleteModal from "../MyFridge/deleteModal";
import { itemCount } from "../MyFridge/CountFridgeItems";
const shopData = require("../data/shoppingListMockData.json");

const ShoppingListView = (props) => {
  const [showAddtoFridge, setShowAddtoFridge] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemId, setShoppingItemId] = useState(0);
  const [shoppingType, setShoppingType] = useState(0);
  // Deleting an Item
  const onDelete = (data, id, type) => {
    let matchIndex = parseInt(shoppingItemId);
    var removeIndex = data[shoppingType][1]
      .map(function (item) {
        return item.id;
      })
      .indexOf(matchIndex);
    if (removeIndex !== -1) {
      data[shoppingType][1].splice(removeIndex, 1);
      setShowDelete(false);
    }
  };

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
      console.log("setFalse!");
    } else {
      setShowAddtoFridge(true);
      console.log("setTrue!");
    }
  }

  function toggle(source, name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let input = document.querySelectorAll(`input[name="${source}"]`)[0];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked !== input.checked) {
        checkbox.checked = input.checked;
      }
    });
    onCheck();
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
                value={data.title}
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
          onDelete={() => onDelete(Object.entries(shopData[0]))}
          itemName={shoppingItemName}
        />
      </tbody>
    );
  };

  return (
    <div>
      <div
        className={`Shop-Box ${itemCount(shopData) === 0 ? "Shop-Hide" : ""}`}
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
      <div className={itemCount(shopData) === 0 ? "" : "Shop-Hide"}>
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
        <button className={`${showAddtoFridge ? "float" : "AddtoFridge-Hide"}`}>
          Add to Fridge
        </button>
      </div>
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
