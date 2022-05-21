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



 async function getNotes() {
  const notesCol = query(collection(db, 'postit'));
  return getDocs(notesCol)
  .then(QuerySnapshot => {
    return QuerySnapshot.docs
    .map(doc => doc.data())
    })
 }
 getNotes()
 .then((items) => console.log(items))
 .catch((error) => console.error(error))

export {getNotes}; 

/* async function getNotes() {
  const notesCol = query(collection(db, 'noteCollection'));
  const noteSnapshot = await getDocs(notesCol);
  const noteList = noteSnapshot.docs.map(doc => {
    console.log('DOC', doc) 
    return doc.data()});
     console.log(noteList) 
   return noteList;
} */

/* const getNotes = () => {
  let listNotes = db.collection('postit');
  let allListNotes = listNotes.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    })
}
 */
/* const getNotes = async () => {
  let listNotes = db.collection('postit');
  let allListNotes = await listNotes.get();
  for(const doc of allListNotes.docs){
    console.log(doc.id, '=>', doc.data());
  }
}
 */
/* export const getNotes = ()=> {
const querySnapshot = await getDocs(collection(db, "postit"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}  */



/* export const getNote = () => getDocs(collection(db, "postit"));

export const onGetNote = (callback) =>
  onSnapshot(collection(db, "postit"), callback); */