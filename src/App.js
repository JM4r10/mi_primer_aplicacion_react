import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion';
import Tarjeta from './componentes/Tarjeta';
function App() {
  return (
    <div className="App">
      <Navegacion titulo='Barra 1'/>
      <div className='row'>
      <Tarjeta titulo='Tarjeta 1' descripcion='Descripcion 1'/>      
      <Tarjeta titulo='Tarjeta 2' descripcion='Descripcion 2'/>
      <Tarjeta titulo='Tarjeta 3' descripcion='Descripcion 3'/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
