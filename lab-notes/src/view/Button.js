import React from "react";
import { useNavigate } from "react-router-dom";

const GoOutButton = ({goTo}) => {
  const navigate = useNavigate();

/*   function buttonGoOut(e) {
    e.preventDefault();
    navigate('/');
  } */
  
  return (
    <div>
      <button onClick={goTo}> SALIR </button>
    </div>
  );
};

export default GoOutButton
