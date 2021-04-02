import React, { useState } from "react";
import "./MyFridge.css";
import { dot, chipDays, chipAmount } from "./itemColoring";
import DeleteModal from "./deleteModal";
import FoodItemModal from "./FoodItemModal";
import { itemCount, num } from "./CountFridgeItems";
import NavBar from "../NavBar";
import welcome_pic from "./MyFridge-Welcome-Pic.png";

const fridgeData = require("../data/fridgeMockData.json");

const MyFridge = (props) => {
  // FoodItemModal useState's
  const [showItemModal, setShowItemModal] = useState(false)
  const [itemModalName, setItemModalName] = useState("") 
  const [itemModalId, setItemModalId] = useState(0) 
  const [itemAmt, setItemAmount] = useState("") 
  const [itemModalDaysLeft, setItemModalDaysleft] = useState(0) 
  const [itemModalDateAdded, setItemModalDateAdded] = useState(0) 

  // DeleteModal useState's
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState(0);

  const [type, setType] = useState(0);
  // Deleting an Item
  const onDelete = (data) => {
    let matchIndex = parseInt(itemId);
    var removeIndex = data[type][1]
      .map(function (item) {
        return item.id;
      })
      .indexOf(matchIndex);
    if (removeIndex !== -1) {
      data[type][1].splice(removeIndex, 1);
      setShow(false);
    }
  };

  // Rendering an Item
  const renderItem = (data, j) => {
    // Handling Delete Click
    const deleteClick = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      const type = event.currentTarget.getAttribute("type");
      setItemName(title);
      setItemId(id);
      setType(type);
      setShow(true);
    };

    // FoodItemModal event handler
    const itemEvent = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      const amount = event.currentTarget.getAttribute("amount")
      const days = event.currentTarget.getAttribute("daysleft");
      const date = event.currentTarget.getAttribute("dateadded")
      setItemModalName(title)
      setItemModalId(id)
      setShowItemModal(true)
      setItemAmount(amount)
      setItemModalDaysleft(days)
      setItemModalDateAdded(date)
    }

    return (
      <tbody key={j}>
        <tr>
          <td
            title={data.title}
            id={data.id}
            amount={data.amount}
            daysLeft={data.daysleft}
            dataAdded={data.dateadded}
            onClick={itemEvent}
          >
            <span>{dot(data.daysleft)}</span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, data.daysleft)}</span>
            <span>{chipDays(data.daysleft)}</span>
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
          onClose={() => setShow(false)}
          show={show}
          onDelete={() => onDelete(Object.entries(fridgeData[0]))}
          itemName={itemName}
        />
        <FoodItemModal
          onClose={() => setShowItemModal(false)}
          show={showItemModal}
          itemName={itemModalName}
          amount={itemAmt}
          daysLeft={itemModalDaysLeft}
          dateAdded={itemModalDateAdded}
        />
      </tbody>
    );
  };

  // Rendering All Fridge Items
  return (
    <div>
      <p className={itemCount(fridgeData) === 0 ? "MyFridge-Hide" : ""}>
        You have {itemCount(fridgeData)} items in your Fridge
      </p>
      <div className={`MyFridge ${num === 0 ? "MyFridge-Hide" : ""}`}>
        {Object.entries(fridgeData[0]).map((item, i) => (
          <div key={i}>
            <h2 className="header">{JSON.parse(JSON.stringify(item[0]))}</h2>
            <table>{item[1].map(renderItem)}</table>
          </div>
        ))}
      </div>
      <div className={num === 0 ? "" : "MyFridge-Hide"}>
        <h2 className="MyFridge-Welcome"> Welcome to Fridgey!</h2>
        <img
          src={welcome_pic}
          alt="MyFridge-Welcome"
          width="300"
          height="270"
        />
        <p>You have {itemCount(fridgeData)} items in your Fridge</p>
        <p className="MyFridge-Welcome-Msg">
          To add items to your Fridge, head over to the Shopping List tab :)
        </p>
      </div>
    </div>
  );
};
// the home page with the items and the stuff at the bottom
const Home = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1 className="fridgey">MyFridge</h1>
      <MyFridge />
    </header>
  </div>
);

// make this available to other modules as an import
export { MyFridge, Home };
