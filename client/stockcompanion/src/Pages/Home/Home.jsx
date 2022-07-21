import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import ApexChart from "../../Chart/ApexChart";
import Default from "../../Components/Layout/Default";
import Stock from "../../Components/stock";

import "./home.css";

const Home = () => {
  const [changeInterval, setChangeInterval] = useState(1);
  const [changeRange, setChangeRange] = useState(1);

  const stock = new Stock("TSLA");

  const handleInterval = (interval) => {
    setChangeInterval(interval);
  };

  const handleRange = (range) => {
    setChangeRange(range);
  };

  useEffect(() => {
    stock.getData();
  }, []);

  return (
    <Fragment>
      
      <Default> 

      <div className="container my-4">
        <div className="d-flex justify-content-between">
          <div className="select-interval">
            <p className="mb-1 font-12 text-white">Interval</p>
            <div className="mb-3">
              <span
                className="interval"
                onClick={() => {
                  handleInterval(1);
                }}
              >
                1M
              </span>
              <span
                className="interval"
                onClick={() => {
                  handleInterval(5);
                }}
              >
                5M
              </span>
              <span
                className="interval"
                onClick={() => {
                  handleInterval(30);
                }}
              >
                30M
              </span>
              <span
                className="interval"
                onClick={() => {
                  handleInterval(60);
                }}
              >
                1HR
              </span>
              <span
                className="interval"
                onClick={() => {
                  handleInterval(10080);
                }}
              >
                1WK
              </span>
            </div>
          </div>
          <div className="date-range">
            <p className="mb-1 font-12 text-white">Date Range</p>
            <div className="mb-3">
              <span
                className="range"
                onClick={() => {
                  handleRange(1);
                }}
              >
                1D
              </span>
              <span
                className="range"
                onClick={() => {
                  handleRange(7);
                }}
              >
                1WK
              </span>
              <span
                className="range"
                onClick={() => {
                  handleRange(30);
                }}
              >
                1M
              </span>
              <span
                className="range"
                onClick={() => {
                  handleRange(180);
                }}
              >
                6M
              </span>
              <span
                className="range"
                onClick={() => {
                  handleRange(360);
                }}
              >
                1YR
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ApexChart Stock={stock} />
          </div>
        </div>
        <div className="add-watchlist mt-4">
          <button className="btn btn-secondary me-3">Add to Watchlist</button>
          <button className="btn btn-secondary">Set Notification</button>
        </div>
        <div className="mb-5">
          <h3 className="text-white">Footnotes</h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control w-50 me-3"
              placeholder="Enter Footnotes ..."
            />
            <button type="submit" className="btn btn-primary px-4">
              Post
            </button>
          </div>
        </div>
      </div>

      </Default>
    </Fragment>
  );
};

export default Home;
