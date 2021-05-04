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
  const getUserId = async () => {
    let userId = await (
      await axios.get("http://157.245.131.216:3001/userdata/getUser")
    ).data;
    console.log("HERE " + userId);
    itemsCall(userId);
  };

  const itemsCall = async (id) => {
    console.log("ITEMSCALL: " + id);
    let a = await axios.get(`http://157.245.131.216:3001/fridgeData/${id}`);
    let items = a.data;
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
    setFridgeData(data);
  };

  useEffect(() => {
    getUserId();
    // call it immediately
    // itemsCall(id);
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
  const [itemModalUpdatedDate, setItemModalUpdatedDate] = useState("");
  const [itemModalNote, setItemModalNote] = useState("");

  // DeleteModal useState's
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState(0);

  // Deleting an Item
  const onDelete = async (event) => {
    event.preventDefault();

    // sends this to MyFridge-Routes
    await axios.delete(`http://157.245.131.216:3001/fridgeData/${itemId}`);
    setShow(false);
    await getUserId();
    // await itemsCall("12345");
  };

  // Edit Item from MyFridge
  const editItem = (amount, useWithin, notesTaken) => {
    const obj = {
      id: itemModalID,
      amount: amount,
      useWithin: useWithin,
      notes: notesTaken,
    };

    // sends to editItem post route
    axios
      .post("http://157.245.131.216:3001/fridgeData/editItem", obj)
      .then((res) => {
        setShowItemModal(false);
        getUserId();
        // itemsCall("12345");
      });
  };

  // Adds Item from MyFridge to Shopping List
  const addItem = (title, amount, type, notesTaken) => {
    const obj = {
      title: title,
      amount: amount,
      type: parseInt(type),
      notes: notesTaken,
    };

    axios
      .post("http://157.245.131.216:3001/fridgeData/addItem", obj)
      .then((res) => {
        setShowItemModal(false);
        getUserId();
        // itemsCall("12345");
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
      const updated = event.currentTarget.getAttribute("updatedAt");
      setItemModalType(type);
      setItemModalName(title);
      setShowItemModal(true);
      setItemModalId(id);
      setItemAmount(amount);
      setItemModalDaysleft(days);
      setItemModalDateAdded(date);
      setItemModalUpdatedDate(updated);
      setItemModalNote(note);
    };

    const updateDate = (daysleft) => {
      if (daysleft <= 0) {
        return 0;
      }
      // today's date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      var date1 = new Date(mm + "/" + dd + "/" + yyyy);
      // last updated date
      var str = data.updatedAt.substring(0, 10).split("-");
      var date2 = new Date(str[1] + "/" + str[2] + "/" + str[0]);

      // difference between days
      const diffTime = Math.abs(date2 - date1);
      var diff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diff > 0) {
        daysleft = daysleft - diff;
      }

      return daysleft;
    };

    return (
      <tbody key={j}>
        <tr>
          <td
            title={data.title}
            id={data._id}
            amount={data.amount}
            daysleft={data.daysleft}
            dateadded={data.createdAt}
            updatedAt={data.updatedAt}
            type={data.type}
            notes={data.notes}
            onClick={itemEvent}
          >
            <span>{dot(updateDate(data.daysleft))}</span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, updateDate(data.daysleft))}</span>
            <span>{chipDays(updateDate(data.daysleft))}</span>
          </td>
          <td>
            <button
              title={data.title}
              id={data._id}
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
        type={itemModalType}
        daysleft={itemModalDaysLeft}
        updatedAt={itemModalUpdatedDate}
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
