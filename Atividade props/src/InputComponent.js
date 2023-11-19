import React, { useState } from 'react';

const InputComponent = (props) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    props.onInputSubmit(inputData);
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder={props.placeHolder || 'Bora marcar uma prainha?'}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default InputComponent;
