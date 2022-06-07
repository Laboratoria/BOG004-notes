import React from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../controler/firebase-init";
import "../view/Home.css";

function Home() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        const displayNameUser = res.user.displayName;
        const emailUser = res.user.email;
        const photoURLUser = res.user.photoURL;
        //actualiza un valor si la clave ya existe
        localStorage.setItem("name", displayNameUser);
        localStorage.setItem("email", emailUser);
        navigate("/notes");
      })
      .catch((error) => {
        navigate("/*");
      });
  };
  return (
    <section className="frame-remind-home">
      <div id="frame-remind" className="frame-remind">
        <span className="container-text-home">
          <h4 className="title-remind">RECORDATORIO</h4>
          <h4 className="subtitle-remind">
            Escribe tus sueños y conviertelos en objetivos
          </h4>
        </span>
        <input
          className="button-remind"
          type="submit"
          value="GOOGLE"
          onClick={signInWithGoogle}
        />

     
      </div>
      <div></div>
    </section>
  );
}
export default Home;
