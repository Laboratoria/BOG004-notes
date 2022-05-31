import React from 'react';
import '../style.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth  from '../firebase/firebase.js';

//Funcion para logearse con Google
const Login = ()=> {

    const loginGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      };
    
    //Vista en la interfaz
    return(
    <div className="login">
    {<img src='src/Image/Remember(2).png' alt='logo'></img>} 
    <h1>inicia sesion con</h1>
    <button onClick={loginGoogle} id='btnGoogle' className='button'>google</button>
    </div>
    );
}

export default Login;