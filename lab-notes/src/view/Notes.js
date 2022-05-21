import React, { Fragment, useEffect, useState } from "react";
/*  import { useNavigate } from "react-router-dom"; */
import { saveNote, getNotes, onGetNote } from "../controler/firebase-init";

import { useForm, Controller } from "react-hook-form";

const HookForm = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveData = (data, e) => {
    e.preventDefault();
    saveNote(title, description);
    console.log(title);
    console.log(description);

    e.target.reset(); // limpiar campos
  };

  useEffect(()=>{
    console.log(useEffect)
    getNotes().then((newDatos)=>{
      console.log(newDatos)
      saveData(newDatos)});
  }, []);

  return (
    <Fragment>
      <h2>Este formulario esta hecho con hook</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <Controller
          render={({ field: { onChange } }) => (
            <input
              placeholder="Titulo"
              className="titleNotes"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          )}
          control={control}
          name="title"
        />

        <Controller
          render={({ field: { onChange } }) => (
            <input
              placeholder="Descripcion"
              className="descripcionNotes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          )}
          control={control}
          name="description"
        />
        <button type="submit" className="btn-notas-primary">
          Publicar
        </button>
            <div> Aquí estan {getNotes}</div>
     
      </form>

{/*    {getNotes.map((item) =>(
     <div key={item.id}>
       <p>{item.title}</p>
       <p>{item.description}</p>
     </div>
   )
   )} */}

    {/*   {<ul className="list">
          {notesList.map((datos, index) => (
          <li key={index}>
            {datos.titulo} - {datos.description}
          </li>
        ))}
      </ul>  } */}
    </Fragment>
  );
};

export default HookForm;
