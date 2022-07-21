//import ApexChart from "../Chart/ApexChart.jsx";
//import Apps from "./new_chart";

import React, { useContext, useState } from "react";
import { StockContext } from "../Contexts/StockContext";
//import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import ApexChart from "../Chart/ApexChart";
import SearchBar from "../Components/SearchBar";
import stockdata from "./SearchData";
import Footnote from "../Components/Footnote";
import Chart from "../Chart/Chart";
import AddWatchlist from "../Components/addWatchlist";
//have a handleButton function that takes as input the start range for the graph.
//it takes the stock obect and calls .setStart() which is set as the context again.

//this component is a subcomponent (child component) of the app.jsx component. It has a context provided in app.jsx, which is passed down to any child component coantined within it. This class is one of them.
//Any component contained in here can access the context provided in app through the useContext hook. This is similar to passing as props: <Component prop = {thing}/>. useContext is emmulating this functionality.

//https://github.com/tedchou12/webull/blob/master/webull/webull.py webulls api that allows us to grab some cool data like news posts

function HomePage(props) {
  const { stockData, setStockData } = useContext(StockContext);
  return (
    //  <div className="searchstock">
    // <SearchBar />
    <div className="home-page">
      <SearchBar placeholder="Enter Stock Ticker" data={stockdata} />
      <Chart />
      <AddWatchlist />
      <Footnote />
    
    
    </div>
  );
}

export default HomePage;
