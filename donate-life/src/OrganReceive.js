import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./App.css";
import organchain from './organchain';
import web3 from './web3';
import receive from "./receive.svg";

const OrganReceive = () => {
	const [address, setAddress] = useState("");
	const [age, setAge] = useState();
	const [group, setGroup] = useState("");
	const [organ, setOrgan] = useState("");
	const [rhFactor, setRhFactor] = useState("");

	const handleAddress = (e) => {
		setAddress(e.target.value);
	};

	const handleAge = (e) => {
		setAge(e.target.value);
	};

	const handleGroup = (e) => {
		setGroup(e.target.value);
	};

	const handleOrgan = (e) => {
		setOrgan(e.target.value);
	};

	const handleRhFactor = (e) => {
		setRhFactor(e.target.value);
	};

	const submitForm = async e => {
		e.preventDefault();
		alert("Check console for values");
		const accounts = await window.ethereum.enable();
		const account = accounts[0];
		const gas = await organchain.methods.addrecipient(address, age, organ, group, rhFactor).estimateGas();
		const result = organchain.methods.addrecipient(address, age, organ, group, rhFactor).send({ from: account, gas});
		console.log(result);
		console.log(address, age, group, organ, rhFactor);
	};

	return (
		<div className="form-container">
			<img src={receive} width="500px" alt="receive" />
			<div className="form">
				<div
					style={{
						fontSize: "25px",
						margin: "0px 0px 20px 0px",
						borderBottom: "1px solid #b0bec5",
						paddingBottom: "10px",
						color: "grey",
					}}
				>
					Organ receiver details
				</div>
				<hr />
				<Form
					style={{ width: "60%" }}
					name="basic"
					initialValues={{ remember: true }}
				>
					<Form.Item>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<span style={{ fontSize: "15px" }}>Receiver's address</span>
							<Input
								value={address}
								onChange={handleAddress}
								className="input"
							/>
							<span>We'll never share your information with anyone</span>
						</div>
					</Form.Item>
					<Form.Item>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<span style={{ fontSize: "15px" }}>Age</span>
							<Input value={age} onChange={handleAge} className="input" />
						</div>
					</Form.Item>
					<Form.Item>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<span style={{ fontSize: "15px" }}>Blood group</span>
							<Input value={group} onChange={handleGroup} className="input" />
						</div>
					</Form.Item>
					<Form.Item>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<span style={{ fontSize: "15px" }}>Organ</span>
							<Input value={organ} onChange={handleOrgan} className="input" />
						</div>
					</Form.Item>

					<Form.Item>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
							}}
						>
							<span style={{ fontSize: "15px" }}>Rh factor</span>
							<Input
								value={rhFactor}
								onChange={handleRhFactor}
								className="input"
							/>
						</div>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							style={{
								width: "100%",
								height: "40px",
								marginTop: "20px",
								borderRadius: "4px",
								fontSize: "17px",
								backgroundColor: "#6C63FF",
							}}
							htmlType="submit"
							onClick={submitForm}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default OrganReceive;
