import React, { useState } from "react";
import "./WatchListItem.css";
function WatchListItem(props) {
  //if the current page is rendering this component, chagne the classname.

  return (
    <div className="watchlist-item">
      <ul className={props.toggleOn}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
        <li>
          <div className="watchlist-item-column">number</div>
        </li>
        <li>
          <div className="watchlist-item-column">ticker</div>
        </li>
        <li>
          <div className="watchlist-item-column">price</div>
        </li>
        <li>
          <div className="watchlist-item-column">afterhours</div>
        </li>
        <li>
          <div className="watchlist-item-column">change</div>
        </li>
        <li>
          <div className="watchlist-item-column">percent change</div>
        </li>
        <li>
          <div className="watchlist-item-column">open</div>
        </li>
        <li>
          <div className="watchlist-item-column">previousClose</div>
        </li>
        <li>
          <div className="watchlist-item-column">high</div>
        </li>
        <li>
          <div className="watchlist-item-column">low</div>
        </li>
        <li>
          <div className="watchlist-item-column">average vol</div>
        </li>
        <li>
          <div className="watchlist-item-column">market cap</div>
        </li>
      </ul>
    </div>
  );
}

export default WatchListItem;
