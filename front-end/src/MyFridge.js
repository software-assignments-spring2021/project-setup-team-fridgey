import React from "react"
import "./MyFridge.css";
import { groups } from "./fridgeDataFake";
import MyFridgeItem from "./MyFridgeItem";

const MyFridge = (props) => {

  const renderItem = (data) => {
    return <MyFridgeItem key={data.id} food={data}/>;
  };

  return (
    <div>
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
