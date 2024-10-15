import React from 'react';
import ListaNomes from './ListaNomes';

const App = () => {
  const nomes = ['Alice', 'Bob', 'Carlos', 'Diana'];

  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ListaNomes nomes={nomes} />
    </div>
  );
};

export default App;
