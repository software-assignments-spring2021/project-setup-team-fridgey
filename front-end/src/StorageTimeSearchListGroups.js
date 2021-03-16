import React from "react";
import { StorageTimeSearchList, Item } from "./App";

const StorageTimeSearchListFruits = () => {
  const items = [
    {
      id: 1,
      name: "Apple",
      spoilTime: 3,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: url(https://bit.ly/3qXaQr0)
    },
    {
      id: 2,
      name: "Pear",
      spoilTime: 5,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: url(https://bit.ly/3qXaQr0)
    },
    {
      id: 3,
      name: "Grapes",
      spoilTime: 10,
      defaultTime: 2,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: url(https://bit.ly/3qXaQr0)
    },
  ];
  const itemList = items.map((item) => <Item key={item.id} item={item}></Item>);
  return (
    <div>
      <header className="App-header">
        <StorageTimeSearchList title="Fruits" />
        {itemList}
      </header>
    </div>
  );
};

const StorageTimeSearchListMeats = () => {
  const items = [
    {
      id: 1,
      name: "Chicken",
      spoilTime: 3,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 2,
      name: "Pork",
      spoilTime: 5,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 3,
      name: "Beef",
      spoilTime: 10,
      defaultTime: 2,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
  ];
  const itemList = items.map((item) => <Item key={item.id} item={item}></Item>);
  return (
    <div>
      <header className="App-header">
        <StorageTimeSearchList title="Meats" />
        {itemList}
      </header>
    </div>
  );
};

const StorageTimeSearchListDairy = () => {
  const items = [
    {
      id: 1,
      name: "Milk",
      spoilTime: 3,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 2,
      name: "Ice cream",
      spoilTime: 5,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 3,
      name: "Cheese",
      spoilTime: 10,
      defaultTime: 2,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
  ];
  const itemList = items.map((item) => <Item key={item.id} item={item}></Item>);
  return (
    <div>
      <header className="App-header">
        <StorageTimeSearchList title="Meats" />
        {itemList}
      </header>
    </div>
  );
};

const StorageTimeSearchListGrain = () => {
  const items = [
    {
      id: 1,
      name: "Whole wheat bread",
      spoilTime: 3,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 2,
      name: "Oatmeal",
      spoilTime: 5,
      defaultTime: 1,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
    {
      id: 3,
      name: "Rice",
      spoilTime: 10,
      defaultTime: 2,
      shortTime: 1,
      averageTime: 2,
      longTime: 3,
      //img: https://bit.ly/3qXaQr0
    },
  ];
  const itemList = items.map((item) => <Item key={item.id} item={item}></Item>);
  return (
    <div>
      <header className="App-header">
        <StorageTimeSearchList title="Grain" />
        {itemList}
      </header>
    </div>
  );
};

export {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListMeats,
  StorageTimeSearchListGrain,
};
