import React from 'react';

const Tabela = ({ dados }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
