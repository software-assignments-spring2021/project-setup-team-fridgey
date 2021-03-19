import React from 'react'
import "./Item.css"
import { Link } from "react-router-dom";

// the general structure for a storage time search list
// includes a back link for every list
const StorageTimeSearchList = (props) => {
    return (
      <div>
        <button className="StorageBackButton">
          <Link to="/Storage-Time-Search">Back</Link>
        </button>
        <h1 className="Food-Group">{props.title}</h1>
      </div>
    );
  };

  export default StorageTimeSearchList