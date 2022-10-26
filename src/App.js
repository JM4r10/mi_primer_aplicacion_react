import logo from './logo.svg';
import './App.css';
import Navegacion from './componentes/Navegacion';
import Cargar from './componentes/Cargar';

function App() {
  return (
    <div className="App">
      
      <Navegacion titulo='Tarjetas' enlace4h={true}/>
      <Cargar/>      
      {/* <Navegacion enlace3='Barra 2' enlace2="enlace" enlace4h={false}/> */}      
      {/* <Tarjeta titulo='Tarjeta 1' descripcion='Descripcion 1' position='0'/>
      <Tarjeta titulo='Tarjeta 1' descripcion='Descripcion 1' position='1'/>  
      <Tarjeta titulo='Tarjeta 1' descripcion='Descripcion 1' position='2'/>  
      <Tarjeta titulo='Tarjeta 1' descripcion='Descripcion 1' position='3'/>         */}      
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
