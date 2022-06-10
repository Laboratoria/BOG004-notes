import { async } from '@firebase/util';
import '../components/Wall.css'
import React, { useState, useEffect } from 'react';
import { saveNote, getNotes } from '../firebase/firebase.js'
//import Note from './Note';


//Escribir nota
const Wall = ()=> {
  const [title, setTitle] = useState("") //para el titulo
  const [description, setDescription] = useState("") //Para la descripcion
  const [notes, setNotes]= useState([])

  //Guardar Nota
  const saveNoteWall = () =>{
   saveNote(title, description)
  }

 //traer Nota
  useEffect(() =>{
   getListNotes()
    console.log(notes)
    },[])

    const getListNotes = async() =>{
      const notes= await getNotes();
      setNotes(notes);
      // cuando crean una nueva nota [...notes, newNote]
      console.log(notes)
    }
    if (!notes.length) return <div>Loading... 888</div>;

  return(
     <div className="wall">
        <div className='logoWall'>
        <img 
          src={require("../Image/logo.png")}/>
        </div>
      <input className='inputNote' value={title}  onChange={(e) => setTitle(e.target.value)} placeholder='titulo'/>
      <textarea className='textNote' value={description}  onChange={(e) => setDescription(e.target.value)} placeholder='Descripcion'/>
      <button onClick={saveNoteWall} id='publish' className='buttonWall'>pubicar</button>
      <p id="delete">{notes[0].title}</p>
      <p id="delete2">{notes[0].description}</p>
      {notes.map((note) => {
        <p>{note.title}</p>;
      })}
      </div>
    );
};


export default Wall;