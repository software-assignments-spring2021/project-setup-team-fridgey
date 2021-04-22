import React, { useEffect } from "react";
import NavBar from "../NavBar";
import StorageTimeSearchList from "./StorageTimeSearchList";
import StorageItem from "./StorageItem";
import axios from "axios";
import { useState } from "react";

// uses a loop to go through all the items, and returns the general structure for list
// (with navbar, header, StorageTimeSearchList, and the itemlist)

//FRUITS (CATEGORY NUMBER 0)
const StorageTimeSearchListFruits = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(data);
  };

  const itemList = items.map((item) => {
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
const StorageTimeSearchListDairy = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(data);
  };
  const itemList = items.map((item) => {
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
const StorageTimeSearchListGrain = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(data);
  };
  const itemList = items.map((item) => {
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
const StorageTimeSearchListMeats = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(data);
  };
  const itemList = items.map((item) => {
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
