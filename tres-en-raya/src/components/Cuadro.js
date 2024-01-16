import React from 'react';
import '../styles/Cuadro.css';

function Cuadro({ valor }) {
    return (
        <button className="cuadro">
            {valor}
        </button>
    );
}

export default Cuadro;