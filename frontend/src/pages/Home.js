// Home.js
import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Main from "./Main";

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
		<div>
			{value ? (
				<Main />
			) : (
				<button onClick={handleLogin}>Sign Up with Google</button>
			)}
		</div>
	);
};

export default Home;
