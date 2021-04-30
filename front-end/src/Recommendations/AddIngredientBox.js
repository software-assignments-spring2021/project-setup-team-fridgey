import React from "react";
import "./AddIngredientBox.css";
import axios from "axios";
import { useState, useEffect } from "react";
import RAddNewFridgeItemModal from "./RAddNewFridgeItemModal";
const AddIngredientBox = (props) => {
  // const fridgeData = require("../data/mock_recipes.json");
  // const itemList=[]
  // for (let i=0;i<fridgeData.length;i++){
  //   for (let j=0;j<fridgeData[i].length;j++){
  //     itemList.push(fridgeData[i][j].title)
  //   }
  // }

  const apiCall = async () => {
    let b = await axios.get("/shopData");
    // console.log(b.data);
    setShopData(b.data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  const onAddToShoppingList = async (name, amount, typeFood) => {
    const obj = {
      title: props.name,
      amount: amount,
      type: typeFood,
      notes: "",
    };

    await axios.post("/shopData/addToShoppingList", obj).then((res) => {
      setShowAddFridgeItemModal(false);
      setShopData(res.data);
    });
  };
  const [shopData, setShopData] = useState([]);
  const [showAddFridgeItemModal, setShowAddFridgeItemModal] = useState(false);
  const [addButton, setAddButton] = useState("+");
  const itemList = props.list.map((str) => str.toLowerCase());
  console.log(itemList);
  if (itemList.includes(props.name.toLowerCase())) {
    return (
      <div>
        <div class="box">
          <p class="text">
            {" "}
            <span style={{ color: "black" }}>{props.name}</span>{" "}
          </p>
          <button
            class="ingredientButton"
            onClick={() => {
              setShowAddFridgeItemModal(true);
            }}
          >
            {" "}
            {addButton}{" "}
          </button>
        </div>
        <RAddNewFridgeItemModal
          onClose={() => setShowAddFridgeItemModal(false)}
          show={showAddFridgeItemModal}
          fromRecipe={true}
          recipeName={props.name}
          parentCallback={onAddToShoppingList}
          onAddToShoppingList={onAddToShoppingList}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div class="box">
          <p class="text">
            <span style={{ color: "red" }}>{props.name}</span>{" "}
          </p>

          <button
            class="ingredientButton"
            onClick={() => {
              setShowAddFridgeItemModal(true);
            }}
          >
            {" "}
            {addButton}{" "}
          </button>
        </div>
        <RAddNewFridgeItemModal
          onClose={() => setShowAddFridgeItemModal(false)}
          show={showAddFridgeItemModal}
          fromRecipe={true}
          recipeName={props.name}
          parentCallback={onAddToShoppingList}
          onAddToShoppingList={onAddToShoppingList}
        />
      </div>
    );
  }
};

export default AddIngredientBox;
