import React, { useEffect, useState, useContext } from "react";
import ApexChart from "./ApexChart";
import "./Chart.css";
import { StockContext } from "../Contexts/StockContext";
import Stock from "../Components/stock";

function Chart(props) {
  const stock = new Stock("TSLA");
  const { stockData, setStockData } = useContext(StockContext);
  const [state, setState] = useState("");
  setInterval(() => {
    console.log("refreshing...");
    stock.getData();
  }, 10000);

  //stock.getData();

  //setChartData(stock);

  // setTimeout(){
  //    data = fetchData()
  //    let updatedStock = stock;
  //     updatedStock.data = data;
  //    setStock(updatedStock);
  // }

  const handleIntervalChange = (interval) => {
    // console.log(stockData);
    // let updatedStock = stock;
    // if (interval == 1) {
    ///  updatedStock.setInterval(interval);
    //stock is updated with new interval
    //fetchData(updatedStock);
    //setStock(updatedStock);
  };
  const handleRangeChange = (range) => {};

  return (
    <div className="chart-container">
      <div className="interval-container">
        <h4>Interval</h4>
        <button
          onClick={() => handleIntervalChange(1)}
          className="interval-select"
        >
          1m
        </button>
        <button
          onClick={() => handleIntervalChange(5)}
          className="interval-select"
        >
          5m
        </button>
        <button
          onClick={() => handleIntervalChange(30)}
          className="interval-select"
        >
          30m
        </button>
        <button
          onClick={() => handleIntervalChange(60)}
          className="interval-select"
        >
          1hr
        </button>
        <button
          onClick={() => handleIntervalChange(10080)}
          className="interval-select"
        >
          1wk
        </button>
      </div>
      <ApexChart Stock={stock} />
      <div className="range-container">
        <h4>Date Range</h4>
        <button onClick={() => handleRangeChange(1)} className="range-select">
          1d
        </button>
        <button onClick={() => handleRangeChange(7)} className="range-select">
          1w
        </button>
        <button onClick={() => handleRangeChange(30)} className="range-select">
          1m
        </button>
        <button onClick={() => handleRangeChange(180)} className="range-select">
          6m
        </button>
        <button onClick={() => handleRangeChange(360)} className="range-select">
          1yr
        </button>
      </div>
    </div>
  );
}

export default Chart;
