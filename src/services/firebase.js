// TODO: import the firebase core module
import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyD8DIIAuadH6z9Z0KgNQ4oo7W-8rB_CMgg",
	authDomain: "job-tracker-react.firebaseapp.com",
	projectId: "job-tracker-react",
	storageBucket: "job-tracker-react.appspot.com",
	messagingSenderId: "948532571015",
	appId: "1:948532571015:web:b0d94432d16c95d25dc122",
	measurementId: "G-M5H4TW8BS5",
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

function login() {
	auth.signInWithPopup(provider);
}
function logout() {
	auth.signOut();
}
export { auth, login, logout };
