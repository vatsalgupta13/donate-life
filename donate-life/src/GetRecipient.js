import React, { useState } from "react";
import { Form, Input, Modal, Button } from "antd";
import "./App.css";
import organchain from "./organchain";
import web3 from "./web3";
import donate from "./donate.svg";

const GetRecipient = () => {
	const [donorAddress, setDonorAddress] = useState("");
	const [modal, setModal] = useState(false);
	const [resultDonorAddress, setResultDonorAddress] = useState("");
	const [age, setAge] = useState("");
	const [organ, setOrgan] = useState("");
	const [bloodgroup, setBloodgroup] = useState("");
	const [rhFactor, setRhFactor] = useState("");
	const [receiverAddress, setReceiverAddress] = useState("");

	const handleAddress = (e) => {
		setDonorAddress(e.target.value);
	};

	const submitForm = async (e) => {
		const result = await organchain.methods
			.getdonorandrecipientwithtransplant(donorAddress)
			.call();
		console.log(result);
		//alert(result);
		setResultDonorAddress(result[0]);
		setAge(result[1]);
		setOrgan(result[2]);
		setBloodgroup(result[3]);
		setRhFactor(result[4]);
		setReceiverAddress(result[5]);
		setModal(true);
	};
	const handleOk = () => {
		setModal(false);
	};
	const handleCancel = () => {
		setModal(false);
	};
	return (
		<div className="form-container">
			<Modal
				title="Match Found"
				visible={modal}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						padding: "25px 20px 20px 25px",
					}}
				>
					<span style={{ marginBottom: "15px" }}>
						Donor address: {resultDonorAddress}
					</span>
					<span style={{ marginBottom: "15px" }}>Age: {age}</span>
					<span style={{ marginBottom: "15px" }}>Organ: {organ}</span>
					<span style={{ marginBottom: "15px" }}>
						Blood Group: {bloodgroup}
					</span>
					<span style={{ marginBottom: "15px" }}>Rh Factor: {rhFactor}</span>
					<span style={{ marginBottom: "15px" }}>
						Receiver's address: {receiverAddress}
					</span>
				</div>
			</Modal>
			<img src={donate} width="500px" alt="donate" />
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
					Get donor and recipient with transplant
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
							<span style={{ fontSize: "15px" }}>Donor's address</span>
							<Input
								value={donorAddress}
								onChange={handleAddress}
								className="input"
							/>
							<span>We'll never share your information with anyone</span>
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

export default GetRecipient;