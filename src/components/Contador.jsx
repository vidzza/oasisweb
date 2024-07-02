import React, { useState } from 'react';
import '../styles.css';


function Contador() {
    
  // Inicializa el estado del contador con 0
  const [contador, setContador] = useState(0);
  const [contadorS, setContadorS] = useState(0);
//   const [textOnChange,buttonOnClic] = useState();
  const [text, setText ] = useState();
  const [updated, setUpdated] = useState();
//   updated = "alex";
  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1); // Increment contador by 1
  };
  
  const incrementarS = () => {
    setContadorS(contadorS + 2); // Increment contadorS by 2
  };
const buttonOnClick = () => {
    setUpdated(text);
}


const textOnChange = (event) => {
    setText(event.target.value);
    }
  return (
 
    <div className="container">
      <input type="text" value = {text} onChange={textOnChange} />
      <button onClick={buttonOnClick} > Actualizar</button>
        <h2>{updated}</h2>
      
      <p className="text">al {updated} se la han metido {contador} veces. :O </p>
      <button 
        className="button"
        onClick={incrementar} 
      >
        se la come + 1
      </button>
      <button 
        className="button"
        onClick={() => setContador(0)}
      >
        Reiniciar
      </button>

      <p className="text">el {updated} se la ha comido {contadorS} veces. :O </p>
      <button 
        className="button"
        onClick={incrementarS}
      >
        se la come + 2
      </button>
      <button 
        className="button"
        onClick={() => setContadorS(0)}
      >
        Reiniciar
      </button>
    </div>
  );
}

export default Contador;
