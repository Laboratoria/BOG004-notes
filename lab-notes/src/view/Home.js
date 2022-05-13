import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  provider,
  loginWithGoogle,
  GoogleAuthProvider,
} from "../controler/firebase-init";

function Home() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    loginWithGoogle()
      .then((res) => {
        navigate("/notes");
        console.log("response: ", res);
      })
      .catch((error) => {
        navigate("/*");
        console.log("response: ", error);
      });
  };
  return (
    <section className="frame-remind-home">
      <div id="frame-remind" className="frame-remind">
        <h4 className="title-remind">Recordatorio</h4>
        <h4 className="subtitle-remind">
          Escribe tus sueños y conviertelos en objetivos
        </h4>
        <input
          className="button-remind"
          type="submit"
          value="GOOGLE"
          onClick={signInWithGoogle}
        />
      </div>

      <div>
        <h4 className="title-remind-register"> ¿Ya tienes cuenta?</h4>{" "}
        <Link to="/register" className="link-remind-register">
          Sign up
        </Link>
      </div>
    </section>
  );
}
export default Home;
