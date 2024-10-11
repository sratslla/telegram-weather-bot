// Home.js
import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Main from "./Main";
import GoogleButton from "react-google-button";

const Home = () => {
	// const navigate = useNavigate();
	const [value, setValue] = useState("");

	const handleLogin = () => {
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email);
			localStorage.setItem("email", data.user.email);
		});
	};

	useEffect(() => {
		setValue(localStorage.getItem("email"));
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			{value ? <Main /> : <GoogleButton onClick={handleLogin} />}
		</div>
	);
};

export default Home;
