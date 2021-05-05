import React from "react";
import EditStorageModal from "./EditStorageTimeModal";
import { useState } from "react";
import "./StorageItem.css";
import axios from 'axios';

// the general structure for every item within the list (button)
// includes an item name, spoil time, and default time
// uses a popup function when clicked
export const StorageItem = ({ item, key }) => {
  const [show, setShow] = useState(false);
  const [radio, setRadio] = useState("Average");

  const handleSubmit = (e) => {
    let userID = await (
      await axios.get("http://157.245.131.216:3001/userdata/getUser")
    ).data;

    console.log("Currently under userID: ", userID);
    let option = e.target.value 
    setRadio(e.target.value);
    if (option === "Shorter"){
      item.defaultTime = item.shortTime
    }
    if (option === "Average"){
      item.defaultTime = item.averageTime
    }
    if (option === "Longer"){
      item.defaultTime = item.longTime
    }

    //Call axios to post the updated times to MongoDB
    axios.post("/storagetimeitems/editStorageItem", {_id: userID, defaultTime: item.defaultTime}).then((res) => {})
  }
  return (
    <div>
      <button onClick={() => setShow(true)} className="storage-item">
        <div className="item-left">
          <text className="item-name">{item.name}</text>
        </div>
        <div className="all-time">
          <text className="spoil-time">Recommended</text>
          <div className="storage-days">
            {item.shortTime}-{item.longTime} days
          </div>
          <text className="default-time">Default</text>
          <div className="storage-days">{item.defaultTime} days</div>
        </div>
      </button>
      <EditStorageModal
        title={item.name}
        onClose={() => setShow(false)}
        show={show}
      >
        <div className="storage-settings-popup">
          <div className="storage-row">
            <input
              type="radio"
              checked={radio === "Shorter"}
              value="Shorter"
              onChange = {handleSubmit}
            />
            <text>Shorter</text>
            <div className="storage-setting-num">{item.shortTime} days</div>
          </div>
          <div className="storage-row">
            <input
              type="radio"
              checked={radio === "Average"}
              value="Average"
              onChange={handleSubmit}
            />
            <text>Average</text>
            <div className="storage-setting-num">{item.averageTime} days</div>
          </div>
          <div className="storage-row">
            <input
              type="radio"
              checked={radio === "Longer"}
              value="Longer"
              onChange={handleSubmit}
            />
            <text>Longer</text>
            <div className="storage-setting-num">{item.longTime} days</div>
          </div>
        </div>
      </EditStorageModal>
    </div>
  );
};

export default StorageItem;
