import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { collection, addDoc, getFirestore, onSnapshot, doc, getDoc,  getDocs, query, snapshot, QuerySnapshot , QueryDocumentSnapshot} from "firebase/firestore";
import { get } from "react-hook-form";


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

export const db = getFirestore(app);

export const saveNote = (title, description) => {
  console.log({ title, description});
  addDoc(collection(db, "postit"), { title, description});
};

 export async function getNotes() {
  const notesCol = query(collection(db, 'postit'));
  return getDocs(notesCol)
  .then(QuerySnapshot => {
    return QuerySnapshot.docs
    .map(doc => doc.data())
    })
 }

 export const onGetNote = (callback) =>
 onSnapshot(collection(db, "postit"), callback); 

