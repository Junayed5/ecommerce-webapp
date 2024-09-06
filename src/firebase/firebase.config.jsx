// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCObXkqpkykoI7QJcc_XEuIHFWplz35w_k",
  authDomain: "task-assignment-a99a1.firebaseapp.com",
  projectId: "task-assignment-a99a1",
  storageBucket: "task-assignment-a99a1.appspot.com",
  messagingSenderId: "981272691606",
  appId: "1:981272691606:web:561be412015fc039f593b7",
  measurementId: "G-SSM7Z35J20",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
