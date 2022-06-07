import React from 'react';
import { saveNote } from '../firebase/firebase.js'


//Escribir nota
const Wall = ()=> {
  
    
    return(
    <div className="wall">
    <h1>ESTE ES EL MURO!!!!!!!</h1>
    <textarea className='textnote' defaultValue="titulo"/>
    <textarea className='textnote' defaultValue="holaa"/>
    <button onClick={saveNote}id='publish' className='button'>pubicar</button>
    </div>
    );
};

export default Wall;