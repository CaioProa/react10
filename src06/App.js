import React, { useState } from 'react';
import Paragrafo from './Paragrafo';

const App = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const toggleHighlight = () => {
    setIsHighlighted(prev => !prev);
  };

  return (
    <div>
      <h1>Estilo Dinâmico em React</h1>
      <button onClick={toggleHighlight}>
        {isHighlighted ? 'Remover Destaque' : 'Destacar'}
      </button>
      <Paragrafo isHighlighted={isHighlighted} />
    </div>
  );
};

export default App;
