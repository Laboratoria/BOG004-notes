//import { async } from '@firebase/util';
import '../components/Wall.css'
import React, { useState, useEffect, Fragment } from 'react';
import { saveNote, getNotes, editNote, deleteNote } from '../firebase/firebase.js'
import { Note } from './Note';
import { useNavigate } from 'react-router-dom';

//import Note from './Note';


//Escribir nota
const Wall = ()=> {
  const [notes, setNotes]= useState([])
  const [thisNote, setThisNote] = useState({
    title: '',
    description: '',
    id:''
  })

  //Guardar Nota
  const saveNoteWall = () =>{
  if(!thisNote.id) {
    saveNote(thisNote.title, thisNote.description)
   }else{
    editNote(thisNote.id, thisNote.title, thisNote.description)
    setThisNote({
      title: '',
      description: '',
      id:''
    })
   }
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
  const editNoteWall =(note) =>{
   setThisNote(note)
  }
  
  const setTitle = (title) =>{
    setThisNote((prev)=>({...prev,
      title
    }))
  }
  const setDescription = (description) =>{
    setThisNote((prev)=>({...prev,
      description
    }))
  }

  //Eliminar Nota
  const deleteNoteWall = (id)=>{
    deleteNote(id);
    getListNotes();
  }

  //Cerrar sesión con el boton
  let Navigate= useNavigate()
  function signOff(e){
    e.preventDefault();
    console.log("click")
    Navigate("/")
  }


  return(
     <div className="wall">
        <div className='logoWall'>
        <img 
          src={require("../Image/logoWallSolo.png")}/>
        </div>
        <div className='text'>
      <h1>Bloc</h1>
      <input className='inputNote' value={thisNote.title}  onChange={(e) => setTitle(e.target.value)} placeholder='titulo'/>
      <textarea className='textNote' value={thisNote.description}  onChange={(e) => setDescription(e.target.value)} placeholder='Descripcion'/>
      <button onClick={saveNoteWall} id='publish' className='buttonWall'>publicar</button>
      </div>
      <div className='ContainerNotes'>
      {notes.map((note, index) => (
        <Fragment  key={index} >
         <Note
          title={note.title} 
          description={note.description}
          editNoteWall={() => {editNoteWall(note)}}
          deleteNoteWall ={() => {deleteNoteWall(note.id)}}
          />
      </Fragment>
        ))}
        </div>
      <div>
        <button onClick={signOff} id='closed' className='buttonClosed'>Cerrar sesion</button>
      </div>
    </div>
    );
};


export default Wall;