import React, { useState } from "react";
import "./MyFridge.css";
import { groups, fruits, grains, dairy, meats } from "./fridgeDataFake";
// import { dot, chipDays, chipAmount } from "./itemColoring";
// import Modal from "./deleteModal";
import MyFridgeItem from "./MyFridgeItem";
// import { countItems } from "./countItems";

const MyFridge = (props) => {
  const [fruitData, setFruitData] = useState(fruits);
  const [grainData, setGrainData] = useState(grains);
  const [dairyData, setDairyData] = useState(dairy);
  const [meatData, setMeatData] = useState(meats);

  // const [show, setShow] = useState(false);
  // const [itemName, setItemName] = useState("Hello");
  // const [itemId, setItemId] = useState(0);
  // const [itemCount, setItemCount] = useState(countItems(groups));

  const renderItem = (data) => {
    // dot, chipAmount, and chipDays can be found in itemColoring.js
    return (
      <MyFridgeItem
        key={data.id}
        food={data}
        updateFruits={() => setFruitData(fruits)}
      />
    );
  };

  // groups is an object in fridgeDataFake.js
  return (
    <div>
      {/* <p>You Have {itemCount} Items in your Fridge</p> */}
      {/* <countItems groups={groups} /> */}
      {groups.map((item, i) => (
        <div key={i}>
          <h2 className="header">{item.header}</h2>
          <table>{item.object.map(renderItem)}</table>
        </div>
      ))}
    </div>
  );
};

export default MyFridge;
