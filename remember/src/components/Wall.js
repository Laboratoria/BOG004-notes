import React from 'react';
import { saveNote } from '../firebase/firebase.js'
import { useState } from 'react';


//Escribir nota
const Wall = ()=> {
  const [title, setTitle] = useState("") //para el titulo
  const [description, setDescription] = useState("") //Para la descripcion
  
  //Guardar Nota
  const saveNoteWall = () =>{
   saveNote(title, description)
  }

  return(
     <div className="wall">
      <h1>ESTE ES EL MURO!!!!!!!</h1>
      <textarea className='textnote' value={title}  onChange={e => setTitle(e.target.value)} placeholder='Descripcion'/>
      <textarea className='textnote' value={description}  onChange={e => setDescription(e.target.value)} placeholder='Descripcion'/>
      <button onClick={saveNoteWall} id='publish' className='button'>pubicar</button>
      </div>
    );
};

export default Wall;