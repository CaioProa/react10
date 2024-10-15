import React from 'react';

const ListaTarefas = ({ tarefas, onRemove }) => {
  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>
          {tarefa.texto}
          <button onClick={() => onRemove(tarefa.id)} style={{ marginLeft: '10px' }}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListaTarefas;
