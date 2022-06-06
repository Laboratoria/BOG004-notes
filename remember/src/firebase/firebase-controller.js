import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
export {
  initializeApp, getFirestore, GoogleAuthProvider, signInWithPopup,
   getAuth, collection, addDoc, getDocs};