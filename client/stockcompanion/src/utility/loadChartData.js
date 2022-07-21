import React, { useEffect } from "react";
import axios from "axios";

const axios_ = axios.create({
  baseURL: "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

export function getStockData(stockObj) {
  let data = fetchData(stockObj);
  data.then((result) => {
    data = formatData(result);
    return data;
  });
}
//stock data is a javascript object
//This parameter takes a stock object: stockData
export async function fetchData(stockData) {
  let Data = [];
  const url = `http://localhost:5000/members?ticker=${stockData.name}&start=${stockData.startTime}&end=${stockData.endTime}&interval=${stockData.interval}&range=${stockData.range}`;
  console.log("URL: ", url);
  await axios_.get(url).then((res) => {
    Data = res.data;
    // return Data;
  }, []);
  return Data;
}

function retreiveDataFromDatabase() {}

//Takes in raw yf API data in the form of a pandas dataframe. Extracts the relavent price parameters and formats them into a
//candle stick format for apex chart.
export function formatData(data) {
  let candleStickData = [];
  let high = [];
  let low = [];
  let open = [];
  let close = [];
  for (let [key, value] of Object.entries(data)) {
    if (key === "High") {
      high = value;
    } else if (key === "Low") {
      low = value;
    } else if (key === "Open") {
      open = value;
    } else if (key === "Close") {
      close = value;
    }
  }
  let time = getTime(high);
  high = get(high);
  low = get(low);
  open = get(open);
  close = get(close);
  for (let i = 0; i < high.length; ++i) {
    candleStickData.push({
      x: new Date(parseInt(time[i])),
      y: [open[i], high[i], low[i], close[i]],
    });
  }
  return candleStickData;
}
function get(list) {
  let data = [];
  for (let [key, value] of Object.entries(list)) {
    data.push(value);
  }
  return data;
}
function getTime(list) {
  let data = [];
  for (let [key, value] of Object.entries(list)) {
    data.push(key);
  }
  return data;
}

function convertToCandleStickFormat(data) {}
