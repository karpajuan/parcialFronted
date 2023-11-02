import { useState } from 'react'
import './App.css'
import Form from "./components/Form"




function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange1 = (event) => {
    setInput1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInput2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (input1.trim().length < 3 || input1.trim().startsWith(' ') || input2.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
    } else {
      setShowCard(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Primer Input:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={handleInputChange1}
          />
        </div>
        <div>
          <label htmlFor="input2">Segundo Input:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={handleInputChange2}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {showCard && (
        <Card input1={input1} input2={input2} />
      )}
    </div>
  );
}
export default App;

