import React, { Fragment, useEffect, useState } from "react";
import {
  saveNote,
  getNotes,
  onDeletNotes,
  updataNotes,
  onGetNotes,
} from "../controler/firebase-init";
import { useForm, Controller } from "react-hook-form";
import "../view/Notes.css";
import {
  updateDoc 
} from "firebase/firestore";
import { async } from "@firebase/util";
/* import { useNavigate } from "react-router-dom"; */

const NoteMaker = () => {
  const { register, errors, control, handleSubmit } = useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [listNotes, setListNotes] = useState([]);
  const [idUpdate, setidUpdate] = useState(null);
  const [oldData, setOldData] = useState("");
  const [editStatusNote, setEditStatusNote] = useState(false);

  const saveData = (data, e) => {
    e.preventDefault();
    saveNote(title, description);
    console.log(title);
    console.log(description);

    getListNotes();
    //Para reiniciar los campos como vacios luego que de se realizará una publicación
    setTitle("");
    setDescription("");
  };

  const getListNotes = ()=>{
    getNotes()
    .then((items) => {
      setListNotes(items);
    })
    .catch((error) => console.error("Estos catch", error));
  }

  useEffect(() => {
    getListNotes();
  }, []);

  const editData = (item) =>{
    setTitle(item.data.title);
    setDescription(item.data.description);
    setidUpdate(item.id);
    setOldData(item);
    console.log(item.data.title);
    console.log(item.data.description);
  }

  const postUpdatedNote = async(e)  =>{
    e.preventDefault();
    console.log("ITEM: ", oldData);
    setEditStatusNote(true);
    if (!setOldData) {
      console.log("if");
    } else {
      await updataNotes(oldData, { title: title, description: description });
      getListNotes();
        //Para reiniciar los campos como vacios luego que de se realizará una publicación
    setTitle("");
    setDescription("");
    }

}

  return (
    <Fragment>
      <h3>¡Escribe para no olvidar!</h3>

      <form onSubmit={editStatusNote ? postUpdatedNote : handleSubmit(saveData)}>
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
            <ion-icon name="checkmark"></ion-icon>
          </button>
          <button
            
            className="btn-notas-primary"
            onClick={(e) => postUpdatedNote(e)}
          >
            <ion-icon name="checkmark-done"></ion-icon>
            EDICIÓN
          </button>
        </div>
        <h3>Tus recordatorios</h3>
        <div className="containerAllNotes">
        {" "}
          {listNotes.map((item) => (
            <div className="individualNotesContainer" key={item.id}>
              <p>{item.data.title}</p>
              <p>{item.data.description}</p>
              <button
                type="button"
                className="individualNotesEdit"
                onClick={() => editData(item)}
              >{" "}
                <ion-icon name="create" className="notes-icon-edit"></ion-icon>
                {/* Editar */}
              </button>
              <button
                type="button"
                className="individualNotesDelet"
                onClick={() => onDeletNotes(item.id)}
              > {" "}
                <ion-icon
                  name="close-circle"
                  className="notes-icon-delet"
                ></ion-icon>
                {/* Eliminar */}
              </button>
            </div>
          ))}
        </div>
      </form> 
    </Fragment>
    
  );
};

export default NoteMaker;

// UseEffect lo usamos cuando el componente necesita se actualizado,
//casí siempre en la parte de abajo estan recibe otra función con los
//datos que van cambiando por ese motivo duplique el código en esa parte
//para que la reciba como actualización si esta vacio solo se ejecuta una vez la función
//Preferí dejar Getnotes fuera del useffect pues genera una lista infinita
