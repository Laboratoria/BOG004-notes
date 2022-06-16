// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth =  getAuth(app);

//Login google
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
    };

//Para guardar Nota
export const saveNote = async (title, description, userId) => {
  // const db = getFirestore(); 
  const docRef= await addDoc( //variable!
    collection(db, 'notas'),{
      title: title ,
      description: description,
     // userId: userId
    }
  );
  console.log(docRef)
};

//Para traer Notas
 export const getNotes= async() => {
  const data = await getDocs(collection(db, 'notas'));
  const notes = [];
  data.forEach(item =>{
    console.log("dataaa", item.data(), item.id);
    notes.push({title: item.data().title, description: item.data().description, id: item.id})
  })

  return notes;
  }

 // Para traer una Nota
  export const getNote= async (id) => {
     const db = getFirestore();
    const noteEdit = await getDoc(doc(db, 'notas', id));
    console.log('holaaa', noteEdit)
    return noteEdit;
  };

  //Para Actualizar la Nota
  export const editNote = async(id, title, description) =>{
  const note= doc(db, "notas", id);
  await updateDoc(note, {
    title,
    description
  });
};

//Eliminar Nota
export const deleteNote = (id) => {
  const db = getFirestore();
  deleteDoc(doc(db, "notas", id));
};