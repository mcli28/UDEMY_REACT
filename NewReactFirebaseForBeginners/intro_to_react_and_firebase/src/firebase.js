// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwpmzkQEHxOwrV66YARCP_U6krPZ1-3fc",
  authDomain: "react-firebase-f-beginners.firebaseapp.com",
  databaseURL: "https://react-firebase-f-beginners-default-rtdb.firebaseio.com",
  projectId: "react-firebase-f-beginners",
  storageBucket: "react-firebase-f-beginners.appspot.com",
  messagingSenderId: "409975243774",
  appId: "1:409975243774:web:4fdb0d721fe9aa3659b6af",
  measurementId: "G-9ENM67YDPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;