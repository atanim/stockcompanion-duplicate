import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = () => {
	const data = {
		columns: [
			{
				label: "Stock Name",
				field: "name",
				sort: "asc",
				width: 500
			},
			{
				label: "Ticker",
				field: "ticker",
				sort: "asc",
				width: 500
			},
			{
				label: "Price",
				field: "price",
				sort: "asc",
				width: 500
			},
			{
				label: "Last 7 days(%)",
				field: "percent",
				sort: "asc",
				align: "center",
				width: 500
			},
			{
				label: "Volume (M)",
				field: "volume",
				sort: "asc",
				width: 500
			}
		],
		rows: [
			{
				name: "TESLA",
				ticker: "TSLA",
				price: "880.34",
				percent: "2.3",
				volume: "456"
			},
			{
				name: "NIO",
				ticker: "NIO",
				price: "23.56",
				percent: "-0.6",
				volume: "23"
			},
			{
				name: "ALIBABA",
				ticker: "BABA",
				price: "83.56",
				percent: "5.8",
				volume: "456"
			},
			{
				name: "AMC",
				ticker: "AMC",
				price: "16.43",
				percent: "-9.5",
				volume: "787"
			},
			{
				name: "PROGENITY",
				ticker: "PROG",
				price: "0.45",
				percent: "0.5",
				volume: "23"
			},
			{
				name: "FORD",
				ticker: "F",
				price: "23.45",
				percent: "0.45",
				volume: "56"
			},
			{
				name: "NVIDIA",
				ticker: "NVDA",
				price: "123.45",
				percent: "0.5",
				volume: "78"
			},
			{
				name: "GAMESTOP",
				ticker: "GME",
				price: "124.45",
				percent: "3.3",
				volume: "566"
			},
			{
				name: "PHUN",
				ticker: "PHUN",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "GOOGLE",
				ticker: "GOGL",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "MICROSOFT",
				ticker: "MCST",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "SPCE",
				ticker: "SPCE",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "ROBINHOOD",
				ticker: "HOOD",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "ROBINHOOD",
				ticker: "HOOD",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "ROBINHOOD",
				ticker: "HOOD",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "ROBINHOOD",
				ticker: "HOOD",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "SPCE",
				ticker: "SPCE",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "SPCE",
				ticker: "SPCE",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "GAMESTOP",
				ticker: "GME",
				price: "124.45",
				percent: "3.3",
				volume: "566"
			},
			{
				name: "GAMESTOP",
				ticker: "GME",
				price: "124.45",
				percent: "3.3",
				volume: "566"
			},
			{
				name: "GAMESTOP",
				ticker: "GME",
				price: "124.45",
				percent: "3.3",
				volume: "566"
			},
			{
				name: "RIOT",
				ticker: "RIOT",
				price: "16.45",
				percent: "0.9",
				volume: "56"
			},
			{
				name: "RIOT",
				ticker: "RIOT",
				price: "16.45",
				percent: "0.9",
				volume: "56"
			},
			{
				name: "GOOGLE",
				ticker: "GOGL",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "GOOGLE",
				ticker: "GOGL",
				price: "34.45",
				percent: "-0.5",
				volume: "45"
			},
			{
				name: "RIOT",
				ticker: "RIOT",
				price: "16.45",
				percent: "0.9",
				volume: "56"
			}
		]
	};

	return <MDBDataTable striped bordered small data={data} />;
};

export default DatatablePage;
