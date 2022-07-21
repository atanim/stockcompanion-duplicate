import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import ApexChart from "../../Chart/ApexChart";
import Default from "../../Components/Layout/Default";
import Stock from "../../Components/stock";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BiSearch } from "react-icons/bi";

import "./home.css";

const Home = () => {
  const intervals = [
    {
      name: "1M",
    },
    {
      name: "5M",
    },
    {
      name: "30M",
    },
    {
      name: "1HR",
    },
    {
      name: "1WK",
    },
  ];

  const ranges = [
    {
      name: "1D",
    },
    {
      name: "1WK",
    },
    {
      name: "1M",
    },
    {
      name: "6M",
    },
    {
      name: "1YR",
    },
  ];

  const [changeInterval, setChangeInterval] = useState("1m");
  const [changeRange, setChangeRange] = useState("1d");

  const stock = new Stock("TSLA");

  const handleInterval = (interval) => {
    setChangeInterval(interval);
  };

  const handleRange = (range) => {
    setChangeRange(range);
  };

  const handleWatchlist = () => {
    alert("Added to Watchlist");
    localStorage.setItem("Tesla", "true");
  };

  useEffect(() => {
    stock.getData();
  });

  return (
    <Fragment>
      <Default>
        <div className="container my-4">
          <Form className="d-flex mb-5">
            <Form.Control
              type="search"
              placeholder="Enter Stock Ticker"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-secondary">
              <BiSearch />
            </Button>
          </Form>

          <div className="d-flex justify-content-between">
            <div className="select-interval">
              <p className="mb-1 font-12 text-white">Interval</p>
              <div className="mb-3">
                {intervals.map((interval, i) => (
                  <span
                    className="interval"
                    onClick={() => {
                      handleInterval(interval.name.toLocaleLowerCase());
                    }}
                    style={{
                      background:
                        changeInterval === interval.name.toLocaleLowerCase()
                          ? "#0a063e"
                          : "white",
                      color:
                        changeInterval === interval.name.toLocaleLowerCase()
                          ? "white"
                          : "#0a063e",
                    }}
                    key={i}
                  >
                    {interval.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="date-range">
              <p className="mb-1 font-12 text-white">Date Range</p>
              <div className="mb-3">
                {ranges.map((range, i) => (
                  <span
                    className="range"
                    onClick={() => {
                      handleRange(range.name.toLocaleLowerCase());
                    }}
                    style={{
                      background:
                        changeRange === range.name.toLocaleLowerCase()
                          ? "#0a063e"
                          : "white",
                      color:
                        changeRange === range.name.toLocaleLowerCase()
                          ? "white"
                          : "#0a063e",
                    }}
                    key={i}
                  >
                    {range.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ApexChart
                Stock={stock}
                range={changeRange}
                interval={changeInterval}
              />
            </div>
          </div>
          <div className="add-watchlist mt-4">
            <button
              className="btn btn-secondary me-3"
              onClick={handleWatchlist}
            >
              Add to Watchlist
            </button>
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
