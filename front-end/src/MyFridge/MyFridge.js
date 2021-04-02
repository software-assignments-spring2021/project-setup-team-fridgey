import React, { useState, useEffect } from "react";
import "./MyFridge.css";
import { dot, chipDays, chipAmount } from "./itemColoring";
import DeleteModal from "./deleteModal";
import FoodItemModal from "./FoodItemModal";
import { itemCount, num } from "./CountFridgeItems";
import NavBar from "../NavBar";
import welcome_pic from "./MyFridge-Welcome-Pic.png";
import axios from "axios";

// const a = async () => {
//   let b = await axios.get("/getFridgeData");
//   return Object.entries(b.data[0]);
// };

// let a = Object.entries(response.data[0]);

// let fridgeData = require("../data/fridgeMockData.json");

// let fridgeData = [];

const MyFridge = (props) => {
  const apiCall = async () => {
    let b = await axios.get("/getFridgeData");
    console.log(b.data);
    setFridgeData(b.data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  const [fridgeData, setFridgeData] = useState([]);

  // FoodItemModal useState's
  const [showItemModal, setShowItemModal] = useState(false);
  const [itemModalName, setItemModalName] = useState("");
  const [itemAmount, setItemAmount] = useState("");
  const [itemModalID, setItemModalId] = useState(0);
  const [itemModalDaysLeft, setItemModalDaysleft] = useState(0);
  const [itemModalDateAdded, setItemModalDateAdded] = useState("");
  const [itemModalType, setItemModalType] = useState(0);
  const [itemModalNote, setItemModalNote] = useState("");

  // DeleteModal useState's
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState(0);
  const [type, setType] = useState(0);

  // Deleting an Item
  const onDelete = (event) => {
    console.log(event.target);
    event.preventDefault();
    axios.delete(`/getFridgeData/${itemId}`).then((res) => {
      console.log(res);
      console.log(res.data);
      setShow(false);
      setFridgeData(res.data);
    });

    // const handleDelete = event => {

    // }

    // console.log("hi onDelete");
    // let matchIndex = parseInt(itemId);
    // var removeIndex = fridgeData[type][1]
    //   .map(function (item) {
    //     return item.id;
    //   })
    //   .indexOf(matchIndex);
    // if (removeIndex !== -1) {
    //   console.log("inside if part!");
    //   let x = fridgeData;
    //   x[type][1].splice(removeIndex, 1);
    //   console.log(x);
    //   setFridgeData(x);
    //   setShow(false);
    // }
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
      const amount = event.currentTarget.getAttribute("amount");
      const id = event.currentTarget.getAttribute("id");
      const days = event.currentTarget.getAttribute("daysleft");
      const date = event.currentTarget.getAttribute("dateadded");
      const type = event.currentTarget.getAttribute("type");
      const note = event.currentTarget.getAttribute("notes");
      setItemModalType(type);
      setItemModalName(title);
      setShowItemModal(true);
      setItemModalId(id);
      setItemAmount(amount);
      setItemModalDaysleft(days);
      setItemModalDateAdded(date);
      setItemModalNote(note);
    };

    return (
      <tbody key={j}>
        <tr>
          <td
            title={data.title}
            id={data.id}
            amount={data.amount}
            daysleft={data.daysleft}
            dateadded={data.dateadded}
            type={data.type}
            notes={data.notes}
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
          onDelete={onDelete}
          itemName={itemName}
        />
      </tbody>
    );
  };
  console.log(fridgeData);

  const editItem = (amount, type, id, useWithin, notesTaken) => {
    Object.entries(fridgeData[0])[type][1][id - 1].amount = amount;
    Object.entries(fridgeData[0])[type][1][id - 1].daysleft = useWithin;
    Object.entries(fridgeData[0])[type][1][id - 1].notes = notesTaken;
    setShowItemModal(false);
  };

  // Rendering All Fridge Items
  return (
    <div>
      <p className={itemCount(fridgeData) === 0 ? "MyFridge-Hide" : ""}>
        You have {itemCount(fridgeData)} items in your Fridge
      </p>
      <div className={`MyFridge ${num === 0 ? "MyFridge-Hide" : ""}`}>
        {fridgeData.map((item, i) => (
          <div key={i}>
            <h2 className="header">{JSON.parse(JSON.stringify(item[0]))}</h2>
            <table>{item[1].map(renderItem)}</table>
          </div>
        ))}
      </div>

      <FoodItemModal
        onClose={() => setShowItemModal(false)}
        parentCallback={editItem}
        show={showItemModal}
        itemName={itemModalName}
        amount={itemAmount}
        id={itemModalID}
        type={itemModalType}
        daysleft={itemModalDaysLeft}
        dateadded={itemModalDateAdded}
        notes={itemModalNote}
      />

      {/* Pops up when there is no items */}
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
