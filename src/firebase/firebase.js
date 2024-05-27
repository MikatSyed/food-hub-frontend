
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBpX6aRlaTxO0i72OJrYOCYFbyMtMswEE",
  authDomain: "food-hub-16961.firebaseapp.com",
  projectId: "food-hub-16961",
  storageBucket: "food-hub-16961.appspot.com",
  messagingSenderId: "165931689496",
  appId: "1:165931689496:web:a22f9e524e45fc21b2856d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};