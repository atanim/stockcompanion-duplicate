import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

import "./watchlist.css";

const WatchlistCard = () => {
  const [trade, setTrade] = useState({
    symbol: "TSLA",
    name: "NASDAQ",
    price: "",
    change: "",
    changePr: "",
    open: "-",
    close: "-",
    high: "-",
    low: "-",
  });

  const loadData = async () => {
    try {
      const endTime = Math.round(Date.now() / 1000, 0);
      const starTime = endTime - 300;
      const URL = `http://localhost:5000/members?ticker=TSLA&start=${starTime}&end=${endTime}&interval=1m&range=1d`;
      const responseParse = await fetch(URL);

      const data = await responseParse.json();

      var price = Object.values(data["Adj Close"]);
      price = price[price.length - 1];

      var open = Object.values(data["Open"]);
      open = open[open.length - 1];

      var close = Object.values(data["Close"]);
      close = close[close.length - 1];

      var prClose = Object.values(data["Close"]);
      prClose = prClose[prClose.length - 2];

      var high = Object.values(data["High"]);
      high = high[high.length - 1];

      var low = Object.values(data["Low"]);
      low = low[low.length - 1];

      setTrade({
        symbol: "TSLA",
        name: "NASDAQ",
        price: price.toFixed(2),
        change: (price - prClose).toFixed(2),
        changePr: (((price - prClose) * 100) / price).toFixed(2) + '%',
        open: open.toFixed(2),
        close: close.toFixed(2),
        high: high.toFixed(2),
        low: low.toFixed(2),
      });
    } catch (error) {
      console.log("E", error);
    }
  };

  useEffect(() => {
    var intvl = setInterval(() => {
      loadData();
    }, 1000);

    return () => {
      if (intvl) {
        clearInterval(intvl);
      }
    };
  }, []);

  return (
    <Card className="p-3 mb-4 shadow-sm watchlist-card">
      <Table striped>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>%Change</th>
            <th>Open</th>
            <th>Close</th>
            <th>High</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{trade.symbol}</td>
            <td>NASDAQ</td>
            <td className={+trade.change > 0 ? "text-success" : "text-danger"}>{trade.price}</td>
            <td className={+trade.change > 0 ? "text-success" : "text-danger"}>{trade.change}</td>
            <td className={+trade.change > 0 ? "text-success" : "text-danger"}>{trade.changePr}</td>
            <td>{trade.open}</td>
            <td>{trade.close}</td>
            <td>{trade.high}</td>
            <td>{trade.low}</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default WatchlistCard;
