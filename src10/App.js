import React from 'react';
import GaleriaImagens from './GaleriaImagens';

const App = () => {
  const imagens = [
    { url: 'https://via.placeholder.com/200', altText: 'Imagem 1' },
    { url: 'https://via.placeholder.com/200/ff0000/ffffff', altText: 'Imagem 2' },
    { url: 'https://via.placeholder.com/200/00ff00/ffffff', altText: 'Imagem 3' },
  ];

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <GaleriaImagens imagens={imagens} />
    </div>
  );
};

export default App;
