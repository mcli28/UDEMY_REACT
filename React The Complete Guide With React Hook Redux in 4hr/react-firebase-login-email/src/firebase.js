import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    /*apiKey: "AIzaSyBCpCM7sl6cAmu-x8qlbM7UGb3LYlmwiI4",
    authDomain: "react-firebase-email-log-21b52.firebaseapp.com",
    projectId: "react-firebase-email-log-21b52",
    storageBucket: "react-firebase-email-log-21b52.appspot.com",
    messagingSenderId: "667906309911",
    appId: "1:667906309911:web:fdbfbf39643607db67c152"*/
    apiKey: "AIzaSyCsF117wCId0rLV305646pUmFVeql4WTnA",
    authDomain: "reactstripe-63cad.firebaseapp.com",
    projectId: "reactstripe-63cad",
    storageBucket: "reactstripe-63cad.appspot.com",
    messagingSenderId: "568339762378",
    appId: "1:568339762378:web:8018023bc55ab9cb31f833"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export const auth = getAuth(app)
export default db