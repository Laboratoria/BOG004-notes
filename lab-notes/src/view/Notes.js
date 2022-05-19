import React, { Fragment, useState } from "react";
/*  import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import {db, saveNote, getNote, onGetNote} from "../controler/firebase-init" */
import { async } from "@firebase/util";
import { useForm, Controller } from "react-hook-form";

const HookForm = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [datos, setDatos] = useState([""]);

  const saveData = (data) => {
    console.log(data);
         setDatos([
      ...datos,
       data
       
  ]) 
    /*   e.target.reset();  // limpiar campos  */
  };
  return (
    <Fragment>
      <h2>Este formulario esta hecho con hook</h2>
      <form onSubmit={handleSubmit(saveData)}>
        <Controller
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              placeholder="Titulo"
              className="titleNotes"
              onChange={onChange}
              /* onBlur={onBlur} */
              /* selected={value} */
            />
          )}
          control={control}
          name="title"
        />

        <Controller
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              placeholder="Descripcion"
              className="descripcionNotes"
              onChange={onChange}
            />
          )}
          control={control}
          name="description"
        />
        <button type="submit" className="btn-notas-primary">
          Publicar
        </button>
      </form>
      <ul className="list">
        {datos.map((value, index) => (
          <li key={index}>
            {value.titulo} - {value.description}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default HookForm;
