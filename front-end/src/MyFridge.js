import React from "react";
import Item from "./Item"
import "./MyFridge.css";
import data from "./fakeData"

const MyFridge = () => {

  // this will render the Item component with the individual food
  const renderItem = (item) => {
    return (
      <Item key={item.id} food={item}/>
    )
  }

  return (
    <div>
      {/* map the types (Fruits, Grains, Dairy, Meats) */}
      {data.map(item => (
        <div key={item.id}>
          <h2 className="header">{item.type}</h2>
          {/* the table for each type is madde */}
          <table>
            {/* map the foods inside each type */}
            {item.food.map(renderItem)}
          </table>
        </div>
      ))}
    </div>
  );
};

export default MyFridge;

