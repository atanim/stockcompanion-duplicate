import React, { useState } from "react";
import WatchListItem from "./WatchListItem";
import "./WatchList.css";

//fetch the data using reference to which stocks and what dates found in the watch list context
//populate state storage with this data.
function displayWatchList() {}

const WatchList = (props) => {
  const [data, setData] = useState(""); //api call?
  const [active, setActive] = useState("watch-list-item-unselected");
  function toggleActive(toggle) {
    if (toggle === "watch-list-item-unselected") {
      setActive("watch-list-item-selected");
    }
  }
  return (
    <div className="watch-list-container">
      <h1>Watchlist-Placeholder-Name</h1>
      <WatchListItem toggleOn="watch-list-item-unselected" />
      <WatchListItem toggleOn="watch-list-item-unselected" />
      <WatchListItem toggleOn="watch-list-item-unselected" />
      <WatchListItem toggleOn="watch-list-item-unselected" />
    </div>
  );
};

export default WatchList;

// return (
//     <div>
//       {data.map(() => {
//         return <WatchListItem />;
//       })}
//     </div>
//   );
