//Aqui voy a hacer el componente de las notas, y luego lo exporto e importo en la vista timeline.
import React from "react";

export const Notes = (props) => {
    return(
        <div>
            <p>
                {props.text}
            </p>
        </div>
    )
}