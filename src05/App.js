import React from 'react';
import Imagens from './Imagens';

const App = () => {
  const urls = [
    'https://via.placeholder.com/150',
    '',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250',
    '',
  ];

  return (
    <div>
      <h1>Renderização de Imagens</h1>
      <Imagens urls={urls} />
    </div>
  );
};

export default App;
