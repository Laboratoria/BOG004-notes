import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {db, saveNote, getNote, onGetNote} from "../controler/firebase-init"
import { async } from "@firebase/util";


function Notes(){

  const [info, setInfo] = useState({
    title: '',
    description: ''
})

  const handleInputChange = (event) => {
    console.log(event.target.name)
    console.log(event.target.value) 
   setInfo({
     ...info, 
     [event.target.name] : event.target.value
    }) 
  } 
  const sendData = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + info.title + ' ' + info.description)
  }
  
  return(
    <div>
      <h1> Estamos en notitas ¿ok? </h1>
      <form onSubmit={sendData}>
        <div>
          <input type="text" 
           placeholder="Titulo" 
           id="title-notes" 
           className="title-notes" 
           onChange={handleInputChange}
           name="title-notes" 
           />
        </div>

        <div>
           <input type="text" 
           placeholder="Descripción" 
           id="notes-description" 
           className="notes-description" 
           onChange={handleInputChange} 
           name="notes-description"
           />
        </div>
        <div>
          <button type="submit" className="notes-button" >Guardar</button>
                </div>
                <ul>
                <li>{info.title}</li>
                <li>{info.description}</li>
            </ul>
      </form>
    </div>
  )
}
export default Notes;
