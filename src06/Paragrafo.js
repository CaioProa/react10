import React from 'react';

const Paragrafo = ({ isHighlighted }) => {
  const estilo = {
    color: isHighlighted ? 'red' : 'black', // Altera a cor com base na prop
    fontSize: '16px',
  };

  return (
    <p style={estilo}>
      Este é um parágrafo que muda de cor!
    </p>
  );
};

export default Paragrafo;
