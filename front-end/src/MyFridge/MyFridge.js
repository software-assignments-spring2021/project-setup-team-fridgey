import React, { useState, useEffect } from "react";
import "./MyFridge.css";
import { dot, chipDays, chipAmount } from "./itemColoring";
import DeleteModal from "./deleteModal";
import FoodItemModal from "./FoodItemModal";
import { itemCount, num } from "./CountFridgeItems";
import NavBar from "../NavBar";
import welcome_pic from "./MyFridge-Welcome-Pic.png";
import axios from "axios";

const MyFridge = (props) => {
  // beginning of the server
  // const apiCall = async () => {
  //   let b = await axios.get("/fridgeData");

  //   // sets the fridge data from mock data as the Fridge Data
  //   setFridgeData(b.data);
  // };

  const itemsCall = async () => {
    let fruit = await axios.get("/fridgeData/fruit");
    let dairy = await axios.get("/fridgeData/dairy");
    let grain = await axios.get("/fridgeData/grain");
    let meat = await axios.get("/fridgeData/meat");
    let data = [
      ["Fruits", fruit.data],
      ["Dairy", dairy.data],
      ["Grain", grain.data],
      ["Meat", meat.data],
    ];
    setFridgeData(data);
  };

  useEffect(() => {
    // call it immediately
    itemsCall();
  }, []);

  // data for MyFridge
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

  // Deleting an Item
  const onDelete = (event) => {
    event.preventDefault();
    // sends this to MyFridge-Routes
    axios.delete(`/fridgeData/${itemId}`).then((res) => {
      setShow(false);
      setFridgeData(res.data);
    });
  };

  // Edit Item from MyFridge
  const editItem = (amount, type, id, useWithin, notesTaken) => {
    const obj = {
      amount: amount,
      type: parseInt(type),
      id: parseInt(id),
      useWithin: useWithin,
      notes: notesTaken,
    };

    axios.post("/fridgeData/postRoute", obj).then((res) => {
      setShowItemModal(false);
      setFridgeData(res.data);
    });
  };

  // Adds Item from MyFridge to Shopping List
  const addItem = (id, title, amount, type) => {
    const obj = {
      id: parseInt(id),
      title: title,
      amount: amount,
      type: parseInt(type),
      dateAdded: "February 20, 2021",
    };

    axios.post("/fridgeData/addItem", obj).then((res) => {
      setShowItemModal(false);
      setFridgeData(res.data);
    });
  };

  // Rendering an Item
  const renderItem = (data, j) => {
    // Handling Delete Click
    const deleteClick = (event) => {
      const title = event.currentTarget.getAttribute("title");
      const id = event.currentTarget.getAttribute("id");
      setItemName(title);
      setItemId(id);
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
        addItemToShoppingList={addItem}
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
