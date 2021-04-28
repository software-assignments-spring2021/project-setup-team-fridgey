import React from "react";
import NavBar from "../NavBar";
import StorageTimeSearchList from "./StorageTimeSearchList";
import StorageItem from "./StorageItem";

// uses a loop to go through all the items, and returns the general structure for list
// (with navbar, header, StorageTimeSearchList, and the itemlist)

//FRUITS (CATEGORY NUMBER 0)
const StorageTimeSearchListFruits = (props) => {
  const itemList = props.data.map((item) => {
    if(item.category === 0){
      return<StorageItem key={item.id} item={item}></StorageItem>
    }
  });
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <StorageTimeSearchList title="Fruits" />
        {itemList}
      </header>
    </div>
  );
};

//DAIRY (CATEGORY NUMBER 1)
const StorageTimeSearchListDairy = (props) => {
  const itemList = props.data.map((item) => {
    if(item.category === 1){
      return<StorageItem key={item.id} item={item}></StorageItem>
    }
  });
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <StorageTimeSearchList title="Dairy" />
        {itemList}
      </header>
    </div>
  );
};

//GRAIN (CATEGORY NUMBER 2)
const StorageTimeSearchListGrain = (props) => {
  const itemList = props.data.map((item) => {
    if(item.category === 2){
      return<StorageItem key={item.id} item={item}></StorageItem>
    }
  });
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <StorageTimeSearchList title="Grain" />
        {itemList}
      </header>
    </div>
  );
};

//MEATS (CATEGORY NUMBER 3)
const StorageTimeSearchListMeats = (props) => {
  const itemList = props.data.map((item) => {
    if(item.category === 3){
      return<StorageItem key={item.id} item={item}></StorageItem>
    }
  });
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <StorageTimeSearchList title="Meats" />
        {itemList}
      </header>
    </div>
  );
};

export {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListGrain,
  StorageTimeSearchListMeats,
};
