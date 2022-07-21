import React, { useState } from "react";
import "./WatchListPage.css";

import "bootstrap/dist/css/bootstrap.min.css";
import WishlistCard from "../Components/Watchlist/WatchlistCard";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Badge from "react-bootstrap/Badge";
import Default from "../Components/Layout/Default";

//watchListData : [stock] array of stock objects
const WatchListPage = () => {
  const [watchListData, setWatchListData] = useState("");
  return (
    <Default>
      <div className="my-4">
        <div className="mb-5">
          <Breadcrumb>
            <Breadcrumb.Item active className="text-white">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Watchlist
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <WishlistCard />
      </div>
    </Default>
  );
};

export default WatchListPage;
