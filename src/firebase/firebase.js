
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrr1Us56IbjrWX40fjE34D-5HotjmHhYI",
  authDomain: "food-app-47253.firebaseapp.com",
  projectId: "food-app-47253",
  storageBucket: "food-app-47253.appspot.com",
  messagingSenderId: "776151857643",
  appId: "1:776151857643:web:03beff50efb7256e8781ae"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};