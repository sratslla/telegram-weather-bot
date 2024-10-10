import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyBhwCEcdg8U1HjP6sjHvd9kTNJp2E5wk8Y",
	authDomain: "telegram-bot-9be6c.firebaseapp.com",
	projectId: "telegram-bot-9be6c",
	storageBucket: "telegram-bot-9be6c.appspot.com",
	messagingSenderId: "1030060003218",
	appId: "1:1030060003218:web:bf0214e19b2202aebffb4b",
	measurementId: "G-RFBB1NJWED",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
