import React, { Fragment, useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { saveNote, getNotes, onGetNotes } from "../controler/firebase-init";
import { useForm, Controller } from "react-hook-form";
/* import GoOut from "../view/Bottom";  */

const HookForm = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [listNotes, setListNotes] = useState([]);

  const saveData = (data, e) => {
    e.preventDefault();
    saveNote(title, description);
    console.log(title);
    console.log(description);
    
    getNotes()
      .then((items) => setListNotes(items))
      .catch((error) => console.error("Estos catch", error));
    
      //Para reiniciar los campos como vacios luego que de se realizará una publicación 
      setTitle("")
      setDescription("")

  };

  useEffect(() => {
      getNotes()
      .then((items) => setListNotes(items))
      .catch((error) => console.error("Estos catch", error));
          
    }, []);

  /*   onGetNote((items)=> {
    console.log ("buenas", items)
  })  */

  /* console.log("Verificado", listNotes); */

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
              <div className="containerAllNotes">
          {" "}
          Aquí estan{" "}
          {listNotes.map((item) => 
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <button type="button"> Editar</button>
              <button type="button"> Eliminar</button>
            </div>
          )}
        </div>
      </form>
     {/*  <button type="button" onClick={GoOut}>
          salir 
        </button> */}
            
    </Fragment>
  );
};



export default HookForm;
