import React from "react";
import "./StorageTimeSearchList.css";
import "./StorageTimeSearch.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

// the general structure for a storage time search list
// includes a back link for every list
const StorageTimeSearchList = (props) => {
  const [items, setItems] = useState(null)

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    const axiosResult = await axios.get("/storagetimeitems");
    let data = await axiosResult.data;
    setItems(...[data]);
  };

  return (
    <div>
      <Button className="storage-back-button">
        <Link to="/Storage-Time-Search">Back</Link>
      </Button>
      <h1 className="food-group">{props.title}</h1>
    </div>
  );
};

export default StorageTimeSearchList;
