import React from 'react';
import {collection, addDoc } from '../firebase/firebase-controller.js'
import { getFirestore } from 'firebase/firestore';
//Escribir nota
const Wall = ()=> {
    const savePost = (note) => {
        const db = getFirestore();
        const docRef = addDoc(
          collection(db, 'notas'),
          note,
        );
        // console.log('Document written with ID: ', docRef.id);
        console.log(note);
      };
    return(
    <div className="wall">
    <h1>ESTE ES EL MURO!!!!!!!</h1>
    <textarea className='textnote' defaultValue="holaa"/>
    <button onClick={savePost}id='publish' className='button'>pubicar</button>
    </div>
    );
};

export default Wall;