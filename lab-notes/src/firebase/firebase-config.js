// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/firebase-config"
const firebaseConfig = {
    apiKey: "AIzaSyDvyIwusRBaoeseEi3OyjZI3i4YMgoiUJs",
    authDomain: "notes-be290.firebaseapp.com",
    projectId: "notes-be290",
    storageBucket: "notes-be290.appspot.com",
    messagingSenderId: "163261869427",
    appId: "1:163261869427:web:09ba7865832d0a9ed6e906",
    measurementId: "G-0K23QTGN1D",
};

// Initialize Firebase
firebase.initializeApp(config);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
