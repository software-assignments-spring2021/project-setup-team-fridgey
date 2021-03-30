import React, { useState } from "react";
import NavBar from "../NavBar";
import welcome_pic from "../MyFridge/MyFridge-Welcome-Pic.png";
import "./ShoppingList.css";
import { chipAmount } from "../MyFridge/itemColoring";
// import Fab from "@material-ui/core/Fab";
// import { makeStyles } from "@material-ui/core/styles";
const shoppingListData = require("../data/shoppingListMockData.json");

const ShoppingListView = (props) => {
  const [showAddtoFridge, setShowAddtoFridge] = useState(false);

  function onCheck() {
    let allEmpty = true;
    let checkboxes = document.querySelectorAll(`input[name="itemCheckbox"]`);
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        allEmpty = false;
      }
    });
    if (allEmpty === true) {
      setShowAddtoFridge(false);
      console.log("setFalse!");
    } else {
      setShowAddtoFridge(true);
      console.log("setTrue!");
    }
  }

  function toggle(source, name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    let input = document.querySelectorAll(`input[name="${source}"]`)[0];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked !== input.checked) {
        checkbox.checked = input.checked;
      }
    });
    onCheck();
  }

  const renderItem = (data) => {
    return (
      <tbody>
        <tr>
          <td>
            <span className="ShoppingList-Checkbox">
              <input
                type="checkbox"
                name="itemCheckbox"
                value={data.title}
                onClick={() => onCheck()}
              />
            </span>
            <span className="title">{data.title}</span>
            <span>{chipAmount(data.amount, 1)}</span>
          </td>
          <td>
            <button>x</button>
          </td>
        </tr>
      </tbody>
    );
  };

  let a = false;
  return (
    <div>
      <div className={`ShoppingList-Container ${a ? "ShoppingList-Hide" : ""}`}>
        <div>
          <table className="SelectAll-table">
            <tr>
              <td className="SelectAll-td">
                <span className="ShoppingList-Checkbox">
                  <input
                    type="checkbox"
                    name="selectAll"
                    onClick={() => toggle("selectAll", "itemCheckbox")}
                  />
                </span>
                <span>Select All</span>
              </td>
            </tr>
          </table>
        </div>
        {Object.entries(shoppingListData[0]).map((item, i) => (
          <div key={i}>
            <h2 className="header">{JSON.parse(JSON.stringify(item[0]))}</h2>
            <table>{item[1].map(renderItem)}</table>
          </div>
        ))}
      </div>
      <div className={a ? "" : "ShoppingList-Hide"}>
        <h2> Welcome to Your Shopping List!</h2>
        <img
          src={welcome_pic}
          alt="MyFridge-Welcome"
          width="300"
          height="270"
        />
        <p className="ShoppingList-Welcome-Msg">
          Start adding items using the add button! :)
        </p>
      </div>
      <div className="center">
        <button className={`${showAddtoFridge ? "float" : "AddtoFridge-Hide"}`}>
          Add to Fridge
        </button>
        <button className={`${showAddtoFridge  ? "addButton-Hide" : "add-button"}`}></button>
      </div>
    </div>
  );
};

const ShoppingList = () => (
  <div>
    <NavBar />
    <header className="App-header">
      <h1 className="ShoppingList-Header">Shopping List</h1>
      <ShoppingListView />
    </header>
  </div>
);

// make this available to other modules as an import
export { ShoppingList };

// function getSelectedCheckboxValues(name) {
//   const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
//   checkboxes.forEach((checkbox) => {
//     values.push(checkbox.checked);
//     // console.log(checkbox.checked);
//   });
//   // for (let i = 0; i < values.length; i++) {
//   //   console.log(values[i]);
//   // }
//   return values;
// }

// function buttonAlert() {
//   alert(getSelectedCheckboxValues("itemCheckbox"));
// }

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
//   root: {
//     position: "fixed",
//   },
// }));

// const classes = useStyles();

/* <div>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={`fab ${classes.margin} ${
            showAddtoFridge ? "" : "hide-AddtoFridge"
          }`}
        >
          Add to MyFridge
        </Fab>
      </div> */
