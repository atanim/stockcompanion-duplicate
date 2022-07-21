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
    price: "743.004",
    change: "-",
    changePr: "-",
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

      var high = Object.values(data["High"]);
      high = high[high.length - 1];

      var low = Object.values(data["Low"]);
      low = low[low.length - 1];

      setTrade({
        symbol: "TSLA",
        name: "NASDAQ",
        price: price.toFixed(5),
        change: "-",
        changePr: "-",
        open: open,
        close: close,
        high: high,
        low: low,
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
            <td className="text-success">{trade.price}</td>
            <td className="text-success">+40.00</td>
            <td className="text-success">+0.41%</td>
            <td>740.35</td>
            <td>736.59</td>
            <td>751.99</td>
            <td>730.45</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
};

export default WatchlistCard;
