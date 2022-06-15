import React from 'react';
import '../components/Note.css'
// Pintar la Nota en la interfaz. Aca recibimos los props
export const Note = ({title, description, editNoteWall}) => {

  return (
    <div className="containerNotetwo">
      <div className="notepq">
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <button id='publish' onClick={editNoteWall} className='buttonWall'>editar</button>
        </article>
      </div>
    </div>
  );
};



