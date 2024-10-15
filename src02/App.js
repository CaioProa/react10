import React from 'react';
import Filho from './Filho';

const App = () => {
  const mensagem = "Olá, sou uma mensagem do componente pai!";

  return (
    <div>
      <h1>Componente Pai</h1>
      <Filho mensagem={mensagem} />
    </div>
  );
};

export default App;
