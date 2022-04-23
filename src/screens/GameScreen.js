import React, { useState } from 'react';
import { getRandom } from '../utils/utils'

const GameScreen = ({ setCurrentScreen, game }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        if (isChecked) {
            setCurrentScreen('result-screen');
        } else {
            setIsChecked(true);
        }
    }

    return (
        <>
            <h1>{game.question}</h1>
            <div className="board">
                {game.all_words.map((word) => <div style={{marginLeft: getRandom(10, 90) + '%'}} className="word">{word}</div>
                )}
            </div>
            <button onClick={() => handleClick()}>{isChecked ? 'finish game' : 'check answers'}</button>
        </>
    )
}

export default GameScreen;