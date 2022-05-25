import React, { Fragment, useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import { saveNote, getNotes, onGetNotes } from "../controler/firebase-init";
import { useForm, Controller } from "react-hook-form";
/* import GoOut from "../view/Bottom";  */
import "../view/Notes.css";

const NoteMaker = () => {
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
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    getNotes()
      .then((items) => setListNotes(items))
      .catch((error) => console.error("Estos catch", error));
  }, []);

  return (
    <Fragment>
      <h3>¡Escribe para no olvidar!</h3>
      <form onSubmit={handleSubmit(saveData)}>
        <div className="note-maker-space">
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
            <textarea
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
        </div>
        <h3>Tus recordatorios</h3>
        <div className="containerAllNotes">
          {" "}
          {" "}
          {listNotes.map((item) => (
            <div className="individualNotesContainer" key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <button type="button" className="individualNotesEdit"> Editar</button>
              <button type="button" className="individualNotesDelet"> Eliminar</button>
            </div>
          ))}
        </div>
      </form>
      {/*  <button type="button" onClick={GoOut}>
          salir 
        </button> */}
    </Fragment>
  );
};

export default NoteMaker;
