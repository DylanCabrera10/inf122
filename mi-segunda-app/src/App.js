import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
  }
  const clickmenos3 = () => {
    setNumClicks(nroClicks -3);
  }
  const clickmas3 = () => {
    setNumClicks(nroClicks +3);
  }
  const clickmenos1 = () => {
    setNumClicks(nroClicks -1);
  }
  const clickmas1 = () => {
    setNumClicks(nroClicks +1);
  }
  
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickmenos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={clickmas3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={clickmenos1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickmas1} />
        </div>
        <div className='contendedor-reiniciar'>
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
      </div>
    </div>
  );
}

export default App;