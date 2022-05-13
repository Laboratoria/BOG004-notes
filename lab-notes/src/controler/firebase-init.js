import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { collection, addDoc, getFirestore, onSnapshot, doc, getDoc,  getDocs, } from "firebase/firestore";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const loginWithGoogle = () => {
  return googlePopUp();
};
export {GoogleAuthProvider}

export const db = getFirestore();

export const saveNote = (title, description) => {
  console.log({ title, description});
  addDoc(collection(db, "notes"), { title, description});
};

export const getNote = () => getDocs(collection(db, "notes"));

export const onGetNote = (callback) =>
  onSnapshot(collection(db, "notes"), callback);