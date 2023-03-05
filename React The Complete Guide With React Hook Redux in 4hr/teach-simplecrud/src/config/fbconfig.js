// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
//import firebase from 'firebase/compat/app';
//import {getFirestore} from 'firebase/compat/firestore';
//import 'firebase/compat/firestore';
//import {getAuth, GoogleAuthProvider} from 'firebase/compat/auth';
//import 'firebase/compat/auth';
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfD41bXenvkKqH4mvmuOTsq7LUV9X4Rwc",
  authDomain: "linotedb.firebaseapp.com",
  projectId: "linotedb",
  storageBucket: "linotedb.appspot.com",
  messagingSenderId: "210851379037",
  appId: "1:210851379037:web:2ed38d2658582025a85ab4",
  measurementId: "G-G6KMN1Q53M"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase)
//export const auth = firebase.auth()

export default firebase