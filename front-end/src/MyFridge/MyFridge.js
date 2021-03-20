import React, { useState } from "react";
import "./MyFridge.css";
import { dot, chipDays, chipAmount } from "./itemColoring";
import Modal from "./deleteModal";
import { itemCount, num } from "./CountFridgeItems";
import NavBar from "../NavBar";

const fridgeData = require("../data/fridgeMockData.json");

const MyFridge = (props) => {
  const [show, setShow] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState(0);
  const [type, setType] = useState(0);
  console.log(fridgeData);
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
              type={data.type}
              onClick={deleteClick}
            >
              x
            </button>
          </td>
        </tr>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          onDelete={() => onDelete(Object.entries(fridgeData[0]))}
          itemName={itemName}
        />
      </tbody>
    );
  };
  // Rendering All Fridge Items
  return (
    <div>
      <p className={num === 0 ? "MyFridge-Hide" : ""}>
        You have {itemCount()} items in your Fridge
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
        <h2> Welcome to Fridgey!</h2>
        <p className={num === 0 ? "" : "MyFridge-Hide"}>{itemCount()}</p>
        <p>
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

// const [count, setCount] = useState(0);

// useEffect(() => {
//   console.log("the component has rendered or re-rendered!");
// }, [count]);

// setCount(x);
// console.log("Count is " + count);
