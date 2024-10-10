import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "../Componentes/Table";
import "./Main.css";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const Main = () => {
	const [apikey, setApiKey] = useState("");

	useEffect(() => {
		fetchApiKey();
	}, []);

	const fetchApiKey = () => {
		axios
			.get(`${backendURL}/admin/api-key`)
			.then((response) => {
				setApiKey(response.data);
			})
			.catch((error) => {
				console.error("Error fetching API key:", error);
			});
	};

	const updateApiKey = () => {
		const newApiKey = prompt("Enter the new API key:");
		if (newApiKey) {
			axios
				.post(`${backendURL}/admin/api-key`, { key: newApiKey })
				.then((response) => {
					alert(response.data);
					fetchApiKey();
				})
				.catch((error) => {
					console.error("Error updating API key:", error);
				});
		}
	};
	return (
		<div className="main-div">
			<div className="apikey-div">
				<div>Current API Key - {apikey}</div>
				<button onClick={updateApiKey}>Update Key</button>
			</div>
			<div className="table-data">
				<Table />
			</div>
		</div>
	);
};

export default Main;
