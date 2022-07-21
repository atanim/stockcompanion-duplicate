import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import "./addWatchlist.css";

function AddWatchlist(props) {
  return (
    <div className="addWatchlist">
        
      <button type = "button" class = "addWatchlistButton"> Add Watchlist </button>
      
      <button type = "button" class = "setNotifyButton"> Set Notification </button>
     
    </div>
  );
}

export default AddWatchlist;
