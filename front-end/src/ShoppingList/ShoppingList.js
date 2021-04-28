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
  const itemsCall = async () => {
    let b = await axios.get("/shopData");
    let items = b.data;
    let fruits = items.filter((item) => item.type === 0);
    let dairy = items.filter((item) => item.type === 1);
    let grains = items.filter((item) => item.type === 2);
    let meats = items.filter((item) => item.type === 3);
    let data = [
      ["Fruits", fruits],
      ["Dairy", dairy],
      ["Grain", grains],
      ["Meat", meats],
    ];
    setShopData(data);
  };
  useEffect(() => {
    itemsCall();
  }, []);

  const [shopData, setShopData] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [shoppingItemName, setShoppingItemName] = useState("");
  const [shoppingItemId, setShoppingItemId] = useState(0);
  const [showAddtoFridge, setShowAddtoFridge] = useState(false);
  const [showFridgeModal, setShowFridgeModal] = useState(false);
  const [showAddFridgeItemModal, setShowAddFridgeItemModal] = useState(false);
  const [inputError, setInputError] = useState(0);
  const [storageItems, setStorageItems] = useState(null);

  // Deleting from Shopping List
  const onDelete = async (event) => {
    event.preventDefault();

    // sends this to ShoppingList-Routes
    await axios.delete(`/shopData/${shoppingItemId}`);
    setShowDelete(false);
    await itemsCall();
  };

  //Retrieving the storage times array from the MongoDB collection
  useEffect(() => {
    getStorageData();
  }, []);

  const getStorageData = async () => {
    const axiosStorageResult = await axios.get("/storagetimeitems");
    let storagedata = await axiosStorageResult.data;
    setStorageItems(storagedata);
  };

  // Adding Items to Fridge and Deleting from Shopping List
  const onAddToFridge = async () => {
    //passing the storageItems array to get accurate storage times when adding to Shopping List
    let AddData = compileAddToFridgeItems(storageItems);

    // let AddData = compileAddToFridgeItems(); // array of objects
    await axios.post("/shopData/addToFridge", AddData);
    await axios.delete("/shopData", { data: AddData });
    itemsCall();

    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false; // uncheck all checkboxes
    });

    setShowFridgeModal(false);
    setShowAddtoFridge(false);
  };

  // Adding items to the shopping list
  const onAddToShoppingList = async (
    userId,
    name,
    amount,
    typeFood,
    notesTaken
  ) => {
    setInputError(0);
    try {
      const obj = {
        userId: userId, // HARDCODING AS "12345" IN AddNewFridgeItemModal.js FOR NOW BUT WILL CHANGE
        title: name,
        amount: amount,
        type: typeFood,
        notes: notesTaken,
      };
      await axios.post("/shopData/addToShoppingList", obj).then((res) => {
        setShowAddFridgeItemModal(false);
        setInputError(0);
        console.log("HERE: " + inputError);
        console.log("HERE2: " + inputError);
        itemsCall();
      });
    } catch (error) {
      let title = error.response.data.errors[0].value;
      if (title.length > 28) {
        alert("Title Must Be Less than 28 Characters. Please Try Again");
        // EERROR MSGS WTIH STATES KINDA WORKS BUT FOR SOME REASON, IT DISABLES THE ADD TO SHOPPING LIST BUTTON*
        // await setInputError(1);
      } else if (title.length < 2) {
        alert("Title Must Be Longer than 2 Characters. Please Try Again");
        // await setInputError(2);
      }
    }
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

  const renderItem = (data, j) => {
    // Handling Delete Click
    const deleteClick = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      setShoppingItemName(title);
      setShoppingItemId(id);
      setShowDelete(true); // the delete modal now appears
    };

    // Return Each Food Item
    return (
      <tbody key={j}>
        <tr>
          <td>
            <span className="Shop-Checkbox">
              <input
                type="checkbox"
                name="itemCheckbox"
                // all values of each food
                id={data._id}
                userId={data.userId}
                value={data.title}
                food={data.type}
                amount={data.amount}
                notes={data.notes}
                onClick={() => onCheck()}
              />
            </span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, 1)}</span>
          </td>
          <td>
            <button
              title={data.title}
              id={data._id}
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
        onAddToFridge={onAddToFridge}
      />
      <AddNewFridgeItemModal
        onClose={() => {
          setInputError(0);
          console.log("HERE: " + inputError);
          // console.log("HERE2: " + inputError1);
          setShowAddFridgeItemModal(false);
        }}
        show={showAddFridgeItemModal}
        onAddToShoppingList={onAddToShoppingList}
        error={inputError}
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
