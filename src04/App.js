import React from 'react';
import Tabela from './Tabela';

const App = () => {
  const dados = [
    { id: 1, nome: 'Alice', idade: 30 },
    { id: 2, nome: 'Bob', idade: 25 },
    { id: 3, nome: 'Carlos', idade: 35 },
  ];

  return (
    <div>
      <h1>Tabela de Usuários</h1>
      <Tabela dados={dados} />
    </div>
  );
};

export default App;
