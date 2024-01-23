import React from 'react';
import TableroD from './TableroD';
import { useState } from 'react';

function Juego() {
    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        }
    ]);
    const [numeroPaso, setNumeroPaso] = useState(0);
    const [esTurnoDeX, setEsTurnoDeX] = useState(true);

    function alHacerClic(i) {
        const nuevoHistorial = historial.slice(0, numeroPaso + 1);
        const actual = nuevoHistorial[nuevoHistorial.length - 1];
        const cuadros = actual.cuadros.slice();
        if (calcularGanador(cuadros) || cuadros[i]) {
            return;
        }
        cuadros[i] = esTurnoDeX ? "X" : "O";
        setHistorial(nuevoHistorial.concat([{ cuadros }]));
        setNumeroPaso(nuevoHistorial.length);
        setEsTurnoDeX(!esTurnoDeX);
    }

    function saltarA(paso) {
        if (paso === 0) {
            // Si estamos retrocediendo al inicio del juego, reiniciamos el historial y el turno del jugador
            setHistorial([
                {
                    cuadros: Array(9).fill(null)
                }
            ]);
            setEsTurnoDeX(true);
        } else {
            // Si estamos retrocediendo a un paso específico, actualizamos el número de paso y el turno del jugador
            setEsTurnoDeX(paso % 2 === 0);
        }
        setNumeroPaso(paso);
    }

    const actual = historial[numeroPaso];
    const ganador = calcularGanador(actual.cuadros);

    const movimientos = historial.map((paso, movimiento) => {
        const descripcion = movimiento ?
            'Ir al movimiento #' + movimiento :
            'Ir al inicio del juego';
        return (
            <li key={movimiento}>
                <button onClick={() => saltarA(movimiento)}>{descripcion}</button>
            </li>
        );
    });

    let estado;
    if (ganador) {
        estado = "Ganador: " + ganador;
    } else {
        estado = "Próximo jugador: " + (esTurnoDeX ? "X" : "O");
    }

    return (
        <div className="juego">
            <div className="tablero-juego">
                <TableroD
                    cuadros={actual.cuadros}
                    onClick={i => alHacerClic(i)}
                />
            </div>
            <div className="informacion-juego">
                <div>{estado}</div>
                <ol>{movimientos}</ol>
            </div>
        </div>
    );
}

// ========================================

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], //primera fila
        [3, 4, 5], //segunda fila
        [6, 7, 8], //tercera fila
        [0, 3, 6], //primera columna
        [1, 4, 7], //segunda columna
        [2, 5, 8], //tercera columna
        [0, 4, 8], //diagonal
        [2, 4, 6] //diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}

export default Juego;