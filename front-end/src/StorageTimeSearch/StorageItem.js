import React from 'react'
import EditStorageModal from "./EditStorageTimeModal";
import { useState } from 'react';

// the general structure for every item within the list (button)
// includes an item name, spoil time, and default time
// uses a popup function when clicked
export const StorageItem = ({ item, key }) => {
    const [show, setShow] = useState(false)
    return (
      <div>
        <button onClick={() => setShow(true)} className="Storage-Item">
          {/* <img className="ItemStorageImage" src={item.img} alt='pic'></img> */}
          <text className="Item-name">{item.name}</text>
          <div className="All-time">
            <text className="Spoil-time">Recommended</text>
            <div className="Storage-Days">{item.shortTime}-{item.longTime} days</div>
            <text className="Default-time">Default</text>
            <div className="Storage-Days">{item.defaultTime} days</div>
          </div>
        </button>
        <EditStorageModal title={item.name} onClose={() => setShow(false)} show={show}>
          <ul>
            <li>Shorter: {item.shortTime} days</li>
            <li>Average: {item.averageTime} days</li>
            <li>Longer: {item.longTime} days</li>
          </ul>
        </EditStorageModal>
      </div>
    )
  }

  export default StorageItem;