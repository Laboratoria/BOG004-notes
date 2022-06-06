import React from 'react';
import '../style.css';
import { signInWithPopup, GoogleAuthProvider } from "../firebase/firebase-controller.js";
import auth  from '../firebase/firebase.js';
import { useNavigate } from 'react-router-dom';

//Funcion para logearse con Google
const Login = ()=> {
    const navigate= useNavigate();
    const loginGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        .then((result) => {
            navigate('/Wall');
            console.log(result)
        });
          };
    
    //Vista en la interfaz
    return(
    <div className="login">
    <h1>Inicia Sesion con</h1>
    <button onClick={loginGoogle} id='btnGoogle' className='button'>google</button>
    </div>
    );
}

export default Login;