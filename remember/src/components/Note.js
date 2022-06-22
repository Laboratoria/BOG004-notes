import React from 'react';
import '../components/Note.css'

// Pintar la Nota en la interfaz. Aca recibimos los props
export const Note = ({title, description, editNoteWall, deleteNoteWall}) => {

  return (
    <div className="containerNotetwo">
        <article>
          <h2 className='title'>{title}</h2>
          <p className='description'>{description}</p>
          <button id='edit' onClick={editNoteWall} className='buttonEdit'>editar</button>
          <button id='delete' onClick={deleteNoteWall} className='buttonDelete'>eliminar</button>
        </article>
    </div>
  );
};



