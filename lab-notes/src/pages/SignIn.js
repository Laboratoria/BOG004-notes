//Aqui voy a hacer la vista de sign in, debe estar en el ruteo de App,
//debe traerse el componente Button

import React from "react";
import { Button } from "components/Button";
import "../styles/SignIn.css"
import "../styles/Button.css"
import logo from '../media/logo.png';
// import firebase from "firebase/app";
// import { redirect } from 'services/firebase';
// import { useState } from "react";

export const SignIn = () => {
    return(
        <div>
            <h1>LabNotes</h1>
            <img src={logo} alt="Logo" />;
            <h2>Create Your Notes</h2>
            <p>For your Daily Tasks Set Reminders.</p>
            <Button />
            {/* <p>Already have an account?</p> */}
        </div>
    )
};





// export default { SignIn, handleGoogleSignIn };