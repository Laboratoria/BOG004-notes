import React from "react";
import  GoOutButton  from "./Button";
import { useNavigate } from "react-router-dom";
import "../view/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  function goTo(e) {
    e.preventDefault();
    navigate('/');
  }
    return(
    <div className="notFound-message-box">
      <h1 className="notFound-message-title">¡Ops esta dirección no ha sido encontrada! </h1>
     <section className="notFound-message-button">
     <GoOutButton goTo={goTo}/>
     </section>
    </div>
    );
  }





  
  