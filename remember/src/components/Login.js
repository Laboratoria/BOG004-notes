import React from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../firebase/firebase.js';

//Funcion para logearse con Google
const Login = ()=> {
    const navigate= useNavigate();
    const loginWithGoogle =() =>{
        loginGoogle().then((result) => {
            navigate('/Wall'); //para cambiar la vista
           console.log(result)
       })
       .catch(error => console.log(error))
    }
    //Vista en la interfaz
    return(
    <div className="login">
    <h1>Inicia Sesion con</h1>
    <button onClick={loginWithGoogle} id='btnGoogle' className='button'>google</button>
    </div>
    );
}

export default Login;