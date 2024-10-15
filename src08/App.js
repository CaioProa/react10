import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>Exemplo de Componente Card</h1>
      <Card>
        <h2>Título do Card</h2>
        <p>Este é um exemplo de conteúdo dentro de um Card.</p>
      </Card>
      <Card>
        <h2>Outro Card</h2>
        <p>Você pode adicionar qualquer conteúdo aqui!</p>
      </Card>
    </div>
  );
};

export default App;
