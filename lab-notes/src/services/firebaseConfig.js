// Aqui dejo la configuración de firebase

  // Import the functions you need from the SDKs you need
  // import 'firebase/compat/auth';
  // import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvyIwusRBaoeseEi3OyjZI3i4YMgoiUJs",
  authDomain: "notes-be290.firebaseapp.com",
  projectId: "notes-be290",
  storageBucket: "notes-be290.appspot.com",
  messagingSenderId: "163261869427",
  appId: "1:163261869427:web:09ba7865832d0a9ed6e906",
  measurementId: "G-0K23QTGN1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export default app;
