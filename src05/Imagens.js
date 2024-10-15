import React from 'react';

const Imagens = ({ urls }) => {
  return (
    <div>
      {urls.map((url, index) => (
        url ? (
          <img key={index} src={url} alt={`Imagem ${index}`} style={{ maxWidth: '100%', margin: '10px' }} />
        ) : null
      ))}
    </div>
  );
};

export default Imagens;
