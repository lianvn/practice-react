import { useState } from 'react';

// Componentes
import Board from './Board';
import Score from './Score'
import Reset from './Reset';

// Data
import { board } from './data/board.json';

function Game() {
    // Objetivo
    const goal = 'HIJO';
    // Data procesada para la tabla
    const data = board.map((letter) => ({id: letter, status: null}));
    // Palabra seleccionada
    const [word, setWord] = useState([]);
    // Letras de la tabla
    const [letters, setLetters] = useState(data);
    ///////////////////////////
    // Funciones principales //
    ///////////////////////////
    const onAdd = (letter) => {
        // Flag para definir si letra ya existe en la palabra
        const exist = word.find(element => element === letter.id);
        // Agrego letra si aun no ha sido ingresada
        if (exist) {
            // Devuelvo mismo objeto
            setWord([...word]);
        } else {
            // Agregar nueva letra y lo valido
            setWord([...word, letter.id]);
            validateLetter(letter);
        }
    }
    const onReset = () => {handleReset()}
    ///////////////////////////
    // Funciones auxiliares //
    ///////////////////////////
    function validateLetter(letter) {
        // Flag para definir si letra seleccionada es valida
        let isValid = null;
        // Verifico si letra se encuentra en la posicion esperada
        if (!goal.includes(letter.id)) {
            isValid = false;
        } else {
            isValid = (goal.split('').findIndex(element => element === letter.id) === word.length);
        }
        // Actualizo estado de la letra
        letter.status = isValid;
        // Actualizo objeto de letras
        setLetters(letters);
    }
    function handleReset() {
        // Limpio objetos de palabras y letras
        setWord([]);
        setLetters(data);
    }
    return (
        <div>
            <h2>Guess the word!</h2>
            <Board letters={letters}
                   onAdd={onAdd}/>
            <Score word={word}
                   goal={goal} />
            <Reset word={word}
                   onReset={onReset} />
            <div>Hint: {goal}</div>
        </div>
    );
}

export default Game;