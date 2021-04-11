import React, { useEffect } from "react";
import NavBar from "../NavBar";
import StorageTimeSearchList from "./StorageTimeSearchList";
import StorageItem from "./StorageItem";
import axios from "axios";
import { useState } from "react";

// uses a loop to go through all the items, and returns the general structure for list
// (with navbar, header, StorageTimeSearchList, and the itemlist)

const StorageTimeSearchListFruits = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems/storagetimesearchlistfruits");
    let data = await axiosResult.data;
    setItems(data);
  };
  // const items = [
  //   {
  //     id: 1,
  //     name: "Apple",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "Pear",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 3,
  //     name: "Grapes",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  // ];
  const itemList = items.map((item) => (
    <StorageItem key={item.id} item={item}></StorageItem>
  ));
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

const StorageTimeSearchListMeats = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimesearchlistfruits");
    let data = await axiosResult.data;
    setItems(data);
  };
  // const items = [
  //   {
  //     id: 1,
  //     name: "Chicken",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "Pork",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 3,
  //     name: "Beef",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  // ];
  const itemList = items.map((item) => (
    <StorageItem key={item.id} item={item}></StorageItem>
  ));
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

const StorageTimeSearchListDairy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimesearchlistfruits");
    let data = await axiosResult.data;
    setItems(data);
  };
  // const items = [
  //   {
  //     id: 1,
  //     name: "Milk",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "Ice cream",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 3,
  //     name: "Cheese",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  // ];
  const itemList = items.map((item) => (
    <StorageItem key={item.id} item={item}></StorageItem>
  ));
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

const StorageTimeSearchListGrain = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimesearchlistfruits");
    let data = await axiosResult.data;
    setItems(data);
  };
  // const items = [
  //   {
  //     id: 1,
  //     name: "Whole wheat bread",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 2,
  //     name: "Oatmeal",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  //   {
  //     id: 3,
  //     name: "Rice",
  //     defaultTime: 2,
  //     shortTime: 1,
  //     averageTime: 2,
  //     longTime: 3,
  //   },
  // ];
  const itemList = items.map((item) => (
    <StorageItem key={item.id} item={item}></StorageItem>
  ));
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

export {
  StorageTimeSearchListFruits,
  StorageTimeSearchListDairy,
  StorageTimeSearchListMeats,
  StorageTimeSearchListGrain,
};
