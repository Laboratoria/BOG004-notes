// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDflIlrlNuzMHmarGH82Fw29b4xOfe1hLk",
  authDomain: "notes-md0.firebaseapp.com",
  projectId: "notes-md0",
  storageBucket: "notes-md0.appspot.com",
  messagingSenderId: "478095288282",
  appId: "1:478095288282:web:9a458ef5598f2d075fc2e3",
  measurementId: "G-H0ZE879M75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);