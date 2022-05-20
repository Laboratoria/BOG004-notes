import React, { Fragment, useState } from "react";
/*  import { useNavigate } from "react-router-dom"; */
import {saveNote, getNote, onGetNote} from "../controler/firebase-init" 
import { async } from "@firebase/util";
import { useForm, Controller } from "react-hook-form";

const HookForm = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [datos, setDatos] = useState('');
  const [content, setContent] = useState('');

/*   const notesCollection = collection(db, "postit") */
 /*  const store = async(e) =>{
    await 
  } */

  const saveData = (data, e) => {
    e.preventDefault () 
   saveNote(datos, content)
    console.log(datos);
    console.log(content);
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
              value={datos}
              onChange={(e) => setDatos(e.target.value)}
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
