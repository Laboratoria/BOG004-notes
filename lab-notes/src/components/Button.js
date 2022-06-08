//Aqui voy a hacer el componente del boton, y luego lo exporto e importo en signIn

import React from "react";
import { handleGoogleSignIn } from '../pages/SignIn'

export const Button = () => {
    return(
        <div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
        </div>
    )
};

// export default { Button };