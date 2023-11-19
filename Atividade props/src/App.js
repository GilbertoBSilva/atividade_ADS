import React, { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';
import './styles.css';

function App() {
  const [displayData, setDisplayData] = useState('');

  const handleInputSubmit = (data) => {
    setDisplayData(getResponseMessage(data));
  };

  const getResponseMessage = (inputData) => {
    switch (inputData.toLowerCase()) {
      case 'sim':
        return 'Domingo, às 12h, Posto 05 de Copacabana/RJ';
      case 'não':
        return 'Eu nem queria sair mesmo';
      default:
        return 'Resposta não reconhecida';
    }
  };

  return (
    <div className="container">
      <InputComponent onInputSubmit={handleInputSubmit} placeHolder="Bora marcar uma prainha?" />
      <DisplayComponent inputData={displayData} />
    </div>
  );
}

export default App;