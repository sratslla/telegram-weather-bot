import React, { useEffect, useState } from "react";
import "./Table.css";
// import data from "../Assets/Data";
import axios from "axios";

const backendURL = process.env.REACT_APP_BACKEND_URL;

const TableDate = ({
	ChatId,
	UserName,
	Joined,
	SubscriptionStatus,
	Blocked,
	onBlockToggle,
}) => {
	const blockUser = (UserName, ChatId) => {
		axios.post(`${backendURL}/users/block/${ChatId}`).then((response) => {
			console.log(response.data);
		});
		console.log(`Blocked ${UserName}`);
		onBlockToggle(ChatId);
	};
	const deleteUser = (UserName, ChatId) => {
		axios.delete(`${backendURL}/users/${ChatId}`).then((response) => {
			console.log(response.data);
		});
		console.log(`Deleted ${UserName}`);
	};
	return (
		<tr className="table-item">
			<td>{UserName}</td>
			<td>{Joined}</td>
			<td>{SubscriptionStatus}</td>
			<td>{Blocked ? "Blocked" : "Not Blocked"}</td>
			<td>
				<button onClick={() => blockUser(UserName, ChatId)}>
					{Blocked ? "UnBlock" : "Block"}
				</button>
				<button onClick={() => deleteUser(UserName, ChatId)}>
					Delete
				</button>
			</td>
		</tr>
	);
};
const Table = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);
	const getUsers = async () => {
		try {
			const response = await axios.get(`${backendURL}/users`);
			if (Array.isArray(response.data)) {
				setUsers(response.data);
			} else {
				console.error("Expected an array but got:", response.data);
				setUsers([]);
			}
		} catch (error) {
			console.error("Error fetching Users", error);
		}
	};
	const onBlockToggle = (chatId) => {
		setUsers((prevUsers) =>
			prevUsers.map((user) =>
				user.chatId === chatId
					? { ...user, blocked: !user.blocked }
					: user
			)
		);
	};
	return (
		<table className="main-table">
			<tr>
				<th>UserName</th>
				<th>
					Joined
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="8"
						height="8"
						viewBox="0 0 8 8"
						fill="none"
					>
						<path
							d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
							fill="#4D4D4D"
						/>
					</svg>
				</th>
				<th>SubscriptionStatus</th>
				<th>Blocked</th>
			</tr>
			{Array.isArray(users) && users.length > 0 ? (
				users.map(
					({
						chatId,
						username,
						createdAt,
						subscriptionstatus,
						blocked,
					}) => (
						<TableDate
							key={chatId}
							ChatId={chatId}
							UserName={username}
							Joined={new Date(createdAt).toLocaleDateString()} // Format date
							SubscriptionStatus={
								subscriptionstatus
									? "Subscribed"
									: "Not Subscribed"
							}
							Blocked={blocked}
							onBlockToggle={onBlockToggle}
						/>
					)
				)
			) : (
				<tr>
					<td colSpan="4">No users found</td>
				</tr>
			)}
		</table>
	);
};

export default Table;
