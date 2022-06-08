//Aqui voy a hacer la vista de logout, debe estar en el ruteo de App,
//deberia tener un componente button off?
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});