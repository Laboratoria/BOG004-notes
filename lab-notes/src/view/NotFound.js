import React from "react";
import  GoOutButton  from "./Button";
import { useNavigate } from "react-router-dom";


export default function NotFound() {
  const navigate = useNavigate();

  function goTo(e) {
    e.preventDefault();
    navigate('/');
  }
    return(
    <div>
      <h1>¡Ops esta dirección no ha sido encontrada! </h1>
      <GoOutButton goTo={goTo}/>
    </div>
    );
  }
  