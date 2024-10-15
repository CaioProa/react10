import React from 'react';

const GaleriaImagens = ({ imagens }) => {
  return (
    <div>
      {imagens.map((imagem, index) => (
        <div key={index}>
          <img src={imagem.url} alt={imagem.altText} style={{ width: '200px', margin: '10px' }} />
        </div>
      ))}
    </div>
  );
};

export default GaleriaImagens;
