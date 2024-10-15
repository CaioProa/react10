import React from 'react';

const ListaComponent = () => {
  const itens = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <h2>Título da Lista</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Este é um parágrafo que descreve a lista acima.</p>
    </>
  );
};

export default ListaComponent;
