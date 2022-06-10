import React from 'react';

// Pintar la Nota en la interfaz. Aca recibimos los props
export const Note = ({title, description}) => {
  
  return (
    <div className="menu">
      <div className="menu-main__container">
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>
      </div>
    </div>
  );
};


