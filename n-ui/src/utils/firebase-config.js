
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyA0HUCpeNRClkD9uPaC2eYnfbz9p_g48_0",
  authDomain: "react-netflix-clone-c205b.firebaseapp.com",
  projectId: "react-netflix-clone-c205b",
  storageBucket: "react-netflix-clone-c205b.appspot.com",
  messagingSenderId: "211428634379",
  appId: "1:211428634379:web:081193fd99dab99200bc0e",
  measurementId: "G-BSKZQLX7C6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)