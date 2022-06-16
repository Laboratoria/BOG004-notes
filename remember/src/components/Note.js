import React from 'react';
import '../components/Note.css'

// Pintar la Nota en la interfaz. Aca recibimos los props
export const Note = ({title, description, editNoteWall, deleteNoteWall}) => {

  return (
    <div className="containerNotetwo">
      <div className="notepq">
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          <button id='edit' onClick={editNoteWall} className='buttonWall'>editar</button>
          <button id='delete' onClick={deleteNoteWall} className='buttonDelete'>eliminar</button>
        </article>
      </div>
    </div>
  );
};



