import React, { Fragment, useState } from "react";
/*  import { useNavigate } from "react-router-dom"; */
import {saveNote, getNote, onGetNote} from "../controler/firebase-init" 
import { async } from "@firebase/util";
import { useForm, Controller } from "react-hook-form";

const HookForm = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

/*   const notesCollection = collection(db, "postit") */
 /*  const store = async(e) =>{
    await 
  } */

  const saveData = (data, e) => {
    e.preventDefault () 
   saveNote(title, description)
    console.log(title);
    console.log(description);
         /* setDatos(
      notesCollection
  )  */
       e.target.reset();  // limpiar campos  
  };
  return (
    <Fragment>
      <h2>Este formulario esta hecho con hook</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <Controller
          render={({ field: { onChange} }) => (
            <input
              placeholder="Titulo"
              className="titleNotes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              /* onChange={onChange} */
            />
          )}
          control={control}
          name="title"
        />

        <Controller
          render={({ field: {onChange} }) => (
            <input
              placeholder="Descripcion"
              className="descripcionNotes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              /* onChange={onChange} */
            />
          )}
          control={control}
          name="description"
        />
        <button type="submit" className="btn-notas-primary">
          Publicar
        </button>
      </form>
     
        {/* <ul className="list">
          {listNotes.map((datos, index) => (
          <li key={index}>
            {datos.titulo} - {datos.description}
          </li>
        ))}
      </ul>  */} 
    </Fragment>
  );
};

export default HookForm;
