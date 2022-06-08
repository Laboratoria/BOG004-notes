//Aqui voy a hacer la vista de sign in, debe estar en el ruteo de App,
//debe traerse el componente Button

import React from "react";
import { Button } from "components/Button";
import firebase from "firebase/app"
import { redirect } from 'services/firebase'
import { loginWithGoogle } from 'services/firebase'

export const SignIn = () => {
    return(
        <div>
            <h1>LabNotes</h1>
            <h2>Create Your Notes</h2>
            <p>For your Daily Tasks Set Reminders.</p>
            <Button />
            <p>Alreay have an account?</p>
{/* este texto puede ser un componente editado en inner html lo mismo que el boton?*/}
        </div>
    )
};

export const handleGoogleSignIn = async () => {
   await loginWithGoogle()
};




// export default { SignIn, handleGoogleSignIn };