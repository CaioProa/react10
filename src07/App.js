import React, { useState } from 'react';
import ListaTarefas from './ListaTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Fazer compras' },
    { id: 2, texto: 'Estudar React' },
    { id: 3, texto: 'Preparar o jantar' },
  ]);

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ListaTarefas tarefas={tarefas} onRemove={removerTarefa} />
    </div>
  );
};

export default App;
