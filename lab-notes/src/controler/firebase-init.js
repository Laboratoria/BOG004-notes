import { deepCopy } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  collection,
  deleteDoc,
  addDoc,
  getFirestore,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
  query,
  snapshot,
  QuerySnapshot,
  QueryDocumentSnapshot,
  updateDoc, 
  UpdateData
  
} from "firebase/firestore";
import { get } from "react-hook-form";

const firebaseConfig = {
  apiKey: "AIzaSyDflIlrlNuzMHmarGH82Fw29b4xOfe1hLk",
  authDomain: "notes-md0.firebaseapp.com",
  projectId: "notes-md0",
  storageBucket: "notes-md0.appspot.com",
  messagingSenderId: "478095288282",
  appId: "1:478095288282:web:9a458ef5598f2d075fc2e3",
  measurementId: "G-H0ZE879M75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const googlePopUp = () => signInWithPopup(auth, provider);

export const loginWithGoogle = () => {
  return googlePopUp();
};
export { GoogleAuthProvider };

export const db = getFirestore(app);

export const saveNote = (title, description) => {
  console.log({ title, description });
  addDoc(collection(db, "postit"), { title, description });
};

export async function getNotes() {
  const notesCol = query(collection(db, "postit"));
  return getDocs(notesCol).then((QuerySnapshot) => {
    return QuerySnapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
  });
}

export async function onDeletNotes(id) {
  console.log("ID Post eliminado", id);
  const notesDelet = await deleteDoc(doc(db, "postit", id));
  console.log(notesDelet);
  return notesDelet;
}
//actualiza 

export async function updataNotes(item, newObj) {
  // const notesUpdataNotes = collection(db, "postit");

/*  console.log('refercia: ', notesUpdataNotes) */
  console.log('new title: ',newObj.title)
  console.log( "new description: ", newObj.description)

  await updateDoc(doc(collection(db, "postit"),item.id), { title: newObj.title, description:newObj.description })

  
/* return notesUpdataNotes; */
}

/* const washingtonRef = doc(db, "cities", "DC");
// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  capital: true
}); */

/* export async function updataNotes(id) {
  console.log("ID Post para editar", id);
  const notesUpdataNotes = await db(collection("postit").doc(id).update({
    title: true, 
  description: true,
}))
return notesUpdataNotes
} */
