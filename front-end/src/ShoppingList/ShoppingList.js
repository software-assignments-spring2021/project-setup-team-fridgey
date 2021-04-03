import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import ShoppingList_welcome from "./ShoppingList.png";
import "./ShoppingList.css";
import { chipAmount } from "../MyFridge/itemColoring";
import DeleteModal from "../MyFridge/deleteModal";
import AddToFridgeModal from "./AddToFridgeModal";
import { itemCount } from "../MyFridge/CountFridgeItems";
import { compileAddToFridgeItems } from "./AddToFridgeItems";
import { AddToFridge } from "./AddToFridge";
import { AddButton } from "./AddButton";
import AddNewFridgeItemModal from "./AddNewFridgeItemModal";
import axios from "axios";

const ShoppingListView = (props) => {
  const apiCall = async () => {
    let b = await axios.get("/shopData");
    console.log(b.data);
    setShopData(b.data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  const [shopData, setShopData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemId, setShoppingItemId] = useState(0);
  const [showAddtoFridge, setShowAddtoFridge] = useState(false);
  const [showFridgeModal, setShowFridgeModal] = useState(false);
  const [showAddFridgeItemModal, setShowAddFridgeItemModal] = useState(false);

  // Deleting from Shopping List
  const onDelete = (event) => {
    event.preventDefault();
    axios.delete(`/shopData/${shoppingItemId}`).then((res) => {
      setShowDelete(false);
      setShopData(res.data);
    });
  };

  // Adding Items to Fridge and Deleting from Shopping List
  const onAddToFridge = async () => {
    let AddData = compileAddToFridgeItems();
    await axios.post("/shopData/addToFridge", AddData);
    await axios.delete("/shopData", { data: AddData }).then((res) => {
      setShopData(res.data);
    });
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false; // uncheck all checkboxes
    });
    setShowFridgeModal(false);
    setShowAddtoFridge(false);
  };

  // Adding items to the shopping list
  const onAddToShoppingList = (name, amount, typeFood) => {
    var itemId = shopData[typeFood][1].length;
    const foodItem = {
      id: itemId + 1,
      title: name,
      amount: amount,
      type: typeFood,
      dateadded: { $date: { $numberLong: 161448318100 } },
    };
    let add = Object.create(foodItem);
    shopData[typeFood][1].push(add);
    setShowAddFridgeItemModal(false);
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
    // if there are no checkboxes checked, the "Add to Fridge" modal will not appear
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
      console.log(event);
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      setShoppingItemName(title);
      setShoppingItemId(id);
      setShowDelete(true); // the delete modal now appears
    };
    // Return Each Food Item
    return (
      <tbody>
        <tr>
          <td>
            <span className="Shop-Checkbox">
              <input
                type="checkbox"
                name="itemCheckbox"
                // all values of each food
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
              x {/* X Button at the end */}
            </button>
          </td>
        </tr>
        <DeleteModal
          onClose={() => setShowDelete(false)}
          show={showDelete}
          onDelete={onDelete}
          itemName={shoppingItemName}
        />
      </tbody>
    );
  };

  return (
    <div>
      {/* All items and checkboxes */}
      <div
        className={`Shop-Box ${itemCount(shopData) === 0 ? "Shop-Hide" : ""}`}
      >
        <div>
          <table className="SelectAll-table">
            <tr>
              {/* Select All Row at top */}
              <td className="SelectAll-td">
                <span className="Shop-Checkbox">
                  <input
                    type="checkbox"
                    name="selectAll"
                    // Selects all items
                    onClick={() => toggle("selectAll", "itemCheckbox")}
                  />
                </span>
                <span>Select All</span>
              </td>
            </tr>
          </table>
        </div>

        {/* Renders all items in the JSON file */}
        {shopData.map((item, i) => (
          <div key={i}>
            {/* Types */}
            <h2 className="header">{JSON.parse(JSON.stringify(item[0]))}</h2>
            {/* Items on those types */}
            <table>{item[1].map(renderItem)}</table>
          </div>
        ))}
      </div>

      {/* If there are no items in the shopping list */}
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

      {/* Buttons on the bottom */}
      <div className="center">
        <AddToFridge
          showAddtoFridge={showAddtoFridge}
          onClick={() => setShowFridgeModal(true)}
        />
        <AddButton
          showAddtoFridge={showAddtoFridge}
          onClick={() => setShowAddFridgeItemModal(true)}
        />
      </div>

      <AddToFridgeModal
        onClose={() => setShowFridgeModal(false)}
        show={showFridgeModal}
        onAddToFridge={() => onAddToFridge()}
      />

      <AddNewFridgeItemModal
        parentCallback={onAddToShoppingList}
        onClose={() => setShowAddFridgeItemModal(false)}
        show={showAddFridgeItemModal}
        onAddToShoppingList={onAddToShoppingList}
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
