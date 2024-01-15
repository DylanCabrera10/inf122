import React from 'react';
import '../styles/Contador.css';

function Contador({ nroClicks }) {
    return (
        <div className='contador'>
            {nroClicks}
        </div>
    );
}

export default Contador;