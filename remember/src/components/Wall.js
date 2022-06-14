import { async } from '@firebase/util';
import '../components/Wall.css'
import React, { useState, useEffect, Fragment } from 'react';
import { saveNote, getNotes, editNote } from '../firebase/firebase.js'
import { Note } from './Note';
//import Note from './Note';


//Escribir nota
const Wall = ()=> {
  const [title, setTitle] = useState("") //para el titulo
  const [description, setDescription] = useState("") //Para la descripcion
  const [notes, setNotes]= useState([])

  //Guardar Nota
  const saveNoteWall = () =>{
   saveNote(title, description)
   getListNotes();
  }

 //traer Nota
  useEffect(() =>{
   getListNotes()
    console.log(notes)
    },[])

    const getListNotes = async() =>{
      const notes= await getNotes();
      setNotes(notes);
      console.log(notes)
    }

    //Para Editar
    const editNoteWall =(id) =>{
      editNote(id, title, description)
      console.log('holaaaa a todos', id)
        }
      

  return(
     <div className="wall">
        <div className='logoWall'>
        <img 
          src={require("../Image/LogoWall.png")}/>
        </div>
      <h1>Bloc de Notas</h1>
      <input className='inputNote' value={title}  onChange={(e) => setTitle(e.target.value)} placeholder='titulo'/>
      <textarea className='textNote' value={description}  onChange={(e) => setDescription(e.target.value)} placeholder='Descripcion'/>
      <button onClick={saveNoteWall} id='publish' className='buttonWall'>pubicar</button>
      <div className='ContainerNotes'>
      {notes.map((note, index) => (
        <Fragment  key={index} >
         <Note
          title={note.title} 
          description={note.description}
          editNoteWall={() => {editNoteWall(note.id)}}
          />
      </Fragment>
         
        ))}
        </div>
      </div>
    );
};


export default Wall;