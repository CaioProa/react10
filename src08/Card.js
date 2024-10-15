import React from 'react';
import './Card.css'; // Para os estilos

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
