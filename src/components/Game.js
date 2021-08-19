import { useState } from 'react';

// Componentes
import Board from './Board';
import Score from './Score'
import Reset from './Reset';

function Game(props) {
    return (
        <div>
            <h2>Guess the word!</h2>
            <Board/>
            <Score/>
            <Reset/>
        </div>
    );
}

export default Game;