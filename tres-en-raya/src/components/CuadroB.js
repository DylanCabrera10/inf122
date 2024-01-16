import React from 'react';
import '../styles/Cuadro.css';

function CuadroB({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default CuadroB;