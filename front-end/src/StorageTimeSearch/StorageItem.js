import React from 'react'
import EditStorageModal from "./EditStorageTimeModal";
import { useState } from 'react';
import "./StorageItem.css";

// the general structure for every item within the list (button)
// includes an item name, spoil time, and default time
// uses a popup function when clicked
export const StorageItem = ({ item, key }) => {
    const [show, setShow] = useState(false)
    const [radio, setRadio] = useState("Average")
    return (
      <div>
        <button onClick={() => setShow(true)} className="storage-item">
          <div className="item-left">
            <text className="item-name">{item.name}</text>
          </div>
          <div className="all-time">
            <text className="spoil-time">Recommended</text>
            <div className="storage-days">{item.shortTime}-{item.longTime} days</div>
            <text className="default-time">Default</text>
            <div className="storage-days">{item.defaultTime} days</div>
          </div>
        </button>
        <EditStorageModal title={item.name} onClose={() => setShow(false)} show={show}>
          <div className="storage-settings-popup">
            <div className="storage-row">
                <input type="radio"
                checked={radio === "Shorter"}
                value="Shorter"
                onChange={(e) =>{setRadio(e.target.value)}}/>
                <text>Shorter</text>
                <div className="storage-setting-num">{item.shortTime} days</div>
              </div>
            <div className="storage-row">
              <input type="radio"
              checked={radio === "Average"}
              value= "Average"
              onChange={(e) =>{setRadio(e.target.value)}}/>
              <text>Average</text>
              <div className="storage-setting-num">{item.averageTime} days</div>
            </div>
            <div className="storage-row">
              <input type="radio"
              checked={radio === "Longer"}
              value="Longer"
              onChange={(e) =>{setRadio(e.target.value)}}/>
              <text>Longer</text>
              <div className="storage-setting-num">{item.longTime} days</div>
            </div>
          </div>
        </EditStorageModal>
      </div>
    )
  }

export default StorageItem;