import React from 'react';

const Filho = ({ mensagem }) => {
  return (
    <div>
      <h2>Mensagem do Pai:</h2>
      <p>{mensagem}</p>
    </div>
  );
};

export default Filho;
