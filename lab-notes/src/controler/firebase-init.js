import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider) .then ((result) =>{
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
}