import { fetchData, formatData } from "../utility/loadChartData.js";

class Stock {
  constructor(ticker) {
    // console.log("here");
    this.name = ticker;
    this.endTime = Math.round(Date.now() / 1000, 0); //time is in UNIX time
    this.startTime = this.endTime - 604800; //seven days, 1 week in seconds: Default start range
    this.interval = 1;
    this.range = 1;
    this.data = [];
    //this.refresh();

    //have a set timer inside this stock object?
  }
  getRange() {}
  refresh() {
    // calls fetch data with parameters
    // setInterval(() => {
    //   console.log("fetching data:");
    //   let data = fetchData(this);
    //   data.then((result) => {
    //     data = formatData(result);
    //     console.log("result:", data);
    //     this.data = data;
    //     // return data;
    //   });
    //   //this.data = data;
    // }, 20000);
  }
  // getData() {
  //   return this.data;
  // }
  getData() {
    let dataResponse = fetchData(this);
    dataResponse.then((result) => {
      var _data = formatData(result);
      this.data = _data;
    });
  }

  // setInterval(() => {
  //   console.log(this.data);
  // });

  setInterval(interval) {
    this.interval = interval;
    this.getData();
    //handle query
    //call the fetchData()
    //this.getData();
  }
  setRange(range) {
    this.range = range;
    this.getData();
  }
  //change aorund so that this is in string format, and checked before assignemnt. Checking should happen in this setter method.
  setDateRange(first, second) {
    this.startTime = first;
    this.endTime = second;
  }
}

export default Stock;
