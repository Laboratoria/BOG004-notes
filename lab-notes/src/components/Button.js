//Aqui voy a hacer el componente del boton, y luego lo exporto e importo en signIn

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle, LogOut } from 'services/firebase'
import "../styles/Button.css"


export const Button = () => {
    const [isLogin, setIsLogin] = useState (true)
    // const [isLogout, setisLogout] = useState(false)
    const navigate = useNavigate()
    const handleGoogleSignIn = async () => {
        await loginWithGoogle()
        navigate('/Timeline')
    };
    // const handleLogout = async () => {
    //         await LogOut()
    //         navigate('/')
    //     };




    return(
        <div>
        {/* <button onClick={handleGoogleSignIn}>Sign in with Google</button> */}
        <button onClick={handleGoogleSignIn}>{isLogin ? 'Sign in with Google' : 'logout'}</button>
        {/* <button onClick={handleLogout}>{isLogin ? 'logout' : 'Sign in with Google'}</button> */}
        </div>
    )
};

