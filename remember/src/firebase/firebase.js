// Import the functions you need from the SDKs you need
import { initializeApp,  getFirestore} from './firebase-controller.js';
import { getAuth } from 'firebase/auth';

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
export const db = getFirestore(app);
const auth =  getAuth(app);
export default auth;

//CODIGO DE PRUEBA PARA FIRESTORE
// useEffect(() =>{

//   const getData= async() => {
//   const data = await getDocs(collection(db, 'notas'));
//   data.forEach((documento) =>{
//       console.log(documento.data());
//   })
//   }

//   getData();
// }, [])