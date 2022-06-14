//Aqui voy a hacer la vista de todas las notas,
//tengo que traer el componente Notes y modificarlo de forma individual
//debe estar ruteado en App
import React from "react";
import { Logout } from "./Logout";

export const Timeline = (props) => {
    return(
        <div>
            <p>
            hola
                {props.children}
            </p>
        </div>
    )
}
