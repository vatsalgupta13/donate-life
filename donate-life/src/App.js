import React, { Component } from 'react';
import { Typography, Tabs } from "antd";
import OrganDonate from "./OrganDonate";
import OrganReceive from "./OrganReceive";
import FindMatch from "./FindMatch";
import GetRecipient from "./GetRecipient";
import "./App.css";
//import organchain from './organchain';
//import web3 from './web3';
import heart from "./heart.svg";

const { TabPane } = Tabs;

class App extends Component {  

	render() {
	return (
		<div className="App">
			<Typography>
				<div
					className="header"
					style={{ paddingLeft: "50px", position: "relative" }}
				>
					<img src={heart} height="30px" alt="heart" />
					<h1 style={{ marginBottom: "0px", marginLeft: "10px" }}>
						Organ donation 
					</h1>
				</div>
				<div style={{ paddingLeft: "50px", paddingTop: "20px" }}>
					<Tabs className="tabs" size="large" defaultActiveKey="1">
						<TabPane tab="Donate organ" key="1">
							<OrganDonate />
						</TabPane>
						<TabPane tab="Receive organ" key="2">
							<OrganReceive />
						</TabPane>
						<TabPane tab="Transplant Match" key="3">
							<FindMatch />
						</TabPane>
						<TabPane tab="Get Recipient" key="4">
							<GetRecipient />
						</TabPane>
					</Tabs>
				</div>
			</Typography>
		</div>
	);
}
}

export default App;
