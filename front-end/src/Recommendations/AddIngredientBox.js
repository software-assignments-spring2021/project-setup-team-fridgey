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
    let b = await axios.get("http://157.245.131.216:3001/shopData");
    // console.log(b.data);
    setShopData(b.data);
  };
  useEffect(() => {
    apiCall();
  }, []);

  // const onAddToShoppingList = async (name, amount, typeFood) => {
  //   const obj = {
  //     title: props.name,
  //     amount: amount,
  //     type: typeFood,
  //     notes: "",
  //   };

  //   await axios
  //     .post("http://157.245.131.216:3001/shopData/addToShoppingList", obj)
  //     .then((res) => {
  //       setShowAddFridgeItemModal(false);
  //       setShopData(res.data);
  //     });
  // };
  const [inputError, setInputError] = useState(0);

  const onAddToShoppingList = async (
    name,
    amount,
    typeFood,
    notesTaken
  ) => {
    let userId = await (
      await axios.get("http://157.245.131.216:3001/userdata/getUser")
    ).data;
    console.log("HERE " + userId);

    setInputError(0);
    try {
      const obj = {
        userId: userId, 
        title: name,
        amount: amount,
        type: typeFood,
        notes: notesTaken,
      };
      await axios
        .post("http://157.245.131.216:3001/shopData/addToShoppingList", obj)
        .then((res) => {
          setShowAddFridgeItemModal(false);
          setInputError(0);
          console.log("HERE: " + inputError);
          console.log("HERE2: " + inputError);
        });
    } catch (error) {
      let title = error.response.data.errors[0].value;
      if (title.length > 28) {
        alert("Title Must Be Less than 28 Characters. Please Try Again");
        // ERROR MSGS WTIH STATES KINDA WORKS BUT FOR SOME REASON, IT DISABLES THE ADD TO SHOPPING LIST BUTTON*
        // await setInputError(1);
      } else if (title.length < 2) {
        alert("Title Must Be Longer than 2 Characters. Please Try Again");
        // await setInputError(2);
      }
    }
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
