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
  const [items, setItems] = useState(null);

  useEffect(() => {
    axiosGet();
  }, []);

  const axiosGet = async () => {
    const axiosResult = await axios.get(
      "/http://157.245.131.216:3001/storagetimeitems"
    );
    let data = await axiosResult.data;
    setItems(...[data]);
  };

  return (
    <div>
      <div className="button-outline">
        <Button variant="outlined" size="small" className="storage-back-button">
          <Link to="/Storage-Time-Search" className="button-text">
            Back
          </Link>
        </Button>
      </div>
      <h1 className="food-group">{props.title}</h1>
    </div>
  );
};

export default StorageTimeSearchList;
