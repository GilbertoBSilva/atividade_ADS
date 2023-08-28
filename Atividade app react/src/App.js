import pensativo from './img/pensativo.png';
import cansado from './img/cansado.png';
import sorrindo from './img/sorrindo.png';
import feliz from './img/feliz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello, World!</h1>
      <img src={sorrindo} alt="sorrindo" />
      <p> Clique no emoji para exibir o nome dele </p>
      <div className="emoji-ordem">
        <img src={pensativo} alt="pensativo" title="pensativo" height="50px" /> 
        <img src={cansado} alt="cansado" title="cansado" height="50px" />
        <img src={feliz} alt="feliz" title="feliz" height="50px" />
      </div>
    </div>
  );
}

export default App;
