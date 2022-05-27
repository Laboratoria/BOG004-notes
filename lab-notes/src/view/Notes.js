import React, { Fragment, useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */
import {
  saveNote,
  getNotes,
  onGetNotes,
  onDeletNotes,
  updataNotes,
} from "../controler/firebase-init";
import { useForm, Controller } from "react-hook-form";
/* import GoOut from "../view/Bottom";  */
import "../view/Notes.css";
import {
  updateDoc 
 
} from "firebase/firestore";


const NoteMaker = () => {
  const { register, errors, control, handleSubmit } = useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [listNotes, setListNotes] = useState([]);
  const [idUpdate, setidUpdate] = useState(null) 
  const [oldData, setOldData] = useState("") 

  const saveData = (data, e) => {
    e.preventDefault();
    saveNote(title, description);
    console.log(title);
    console.log(description);

    getNotes()
      .then((items) => {
        setListNotes(items);
      })
      .catch((error) => console.error("Estos catch", error));
    //Para reiniciar los campos como vacios luego que de se realizará una publicación
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    getNotes()
      .then((items) => {
        console.log("ITEMS", items);
        setListNotes(items);
      })
      .catch((error) => console.error("Estos catch", error));
  }, []);

  function editData(item) {
    setTitle(item.data.title);
    setDescription(item.data.description);
    setidUpdate(item.id);
    setOldData(item)
    console.log(item.data.title);
    console.log(item.data.description);
    /* updataNotes(title, description); */
    /* saveData({...item.data()}) */
  }
  function despuesActu(item) {
    if (title != oldData.data.title) {
     }
     
     /* updateDoc(editData()) */
     /* setidUpdate(title.value, description.value, []); */
  }

/*   function arrayEditado  = title.map(item => (
    item.id === id ? {id: item.id, name: title} : item
  ))
  setTitle(arrayEditado)
  editData(false)
  setId('')
} catch (error) {
  console.log(error)
} */

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
          <button type="submit" onClick={() => despuesActu} >
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
              >
                {" "}
                Editar
              </button>
              <button
                type="button"
                className="individualNotesDelet"
                onClick={() => onDeletNotes(item.id)}
              >
                {" "}
                Eliminar
              </button>
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

// UseEffect lo usamos cuando el componente necesita se actualizado,
//casí siempre en la parte de abajo estan recibe otra función con los
//datos que van cambiando por ese motivo duplique el código en esa parte
//para que la reciba como actualización si esta vacio solo se ejecuta una vez la función
//Preferí dejar Getnotes fuera del useffect pues genera una lista infinita
