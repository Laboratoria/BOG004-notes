import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {db, saveNote, getNote, onGetNote} from "../controler/firebase-init"
import { async } from "@firebase/util"; 


function Notes(){

  const [datos, setDatos] = useState({
    title: '',
    description: '',
})
  const handleInputChange = (event) => {
   /*  console.log(event.target.name)
    console.log(event.target.value)  */
   setDatos({
    title: document.getElementById('title-notes').value,
    description: document.getElementById('notes-description').value,
     /* ...datos,  */
     [event.target.name] : event.target.value,
       
    }) 
  } 
  const sendData = (event) => {
    /* event.preventDefault(); */
    console.log(event)
    console.log('enviando datos...' + datos.title + ' ' + datos.description)
  
  } 
 
 /*<form onSubmit={ev => {ev.preventDefault();console.log(ev.target.setInfo.value);}}></form> */
  
  return(
    <div>
      <h1> Estamos en notitas ¿ok? </h1>
        <form /* onSubmit={sendData} */>
      <div name="dataForm">  
        <div >
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
       </div>
        <div>
          <button type="button" onClick={sendData}  className="notes-button">Guardar</button>
        </div>
      </form>
      <h3>{datos.title} - {datos.description}</h3> 
    </div>
  )
}
export default Notes;

/* const Create = () =>{
  const [description, setDescription] = useState ('')
  const [stock, setstock] = useState(0)
  const navigate = useNavigate()

  const notesCollection = collection(db, "notes")
  
  const store = async(e) =>{
    e.preventDefault ()
    await addDoc(notesCollection, {description: description, stock: stock })
  }
  
  return (
    <div className="contairner">
       <div className= "row">
        <div className= "col">
          <h1>Create Product</h1>

          <form onSubmit={store}>
            <div className= "mb-3">
              <label className="form-label"> Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type= "text"
                className="form-control"
              />
            </div>
            <div className= "mb-3">
              <label className="form-label">Stock</label>
              <input
                value={stock}
                onChange={(e) => setDescription(e.target.value)}
                type= "text"
                className="form-control"
              />
            </div>

          </form>
      </div>
      </div>
      </div>
  )
} 

export default function Notes(){
  const Create = () =>{
 
  onGetNote((querySnapshot) => {
    let noteList = "";
    querySnapshot.forEach((doc) => {
      const notes = doc.data();
      noteList += 
      
      <h1>Hallo </h1>
    }
    )
  }
  )    
   return (
    <div>
      <h1>Pon tus notitas aquí </h1>

     {  <form onSubmit={store}>  }
      <div className="container">
        <div className="row">
          <div className="col">
            <h1> Escribe para no perder ninguna idea</h1>
             
            <div className="mb-3">
              <label className="form-label"> Description</label>
              <input type="text" className="form-control" 
              value={description}
              onChange={(e) => setDescription(e.target.value)} 
                />
            </div>

            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        
      </div>
     { </form> }
    </div>
    );
   
  }
  return Create (); 
} */   