import React, { useState } from 'react';
import SingleWord from '../components/SingleWord';

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
                {game.all_words.map((word) => <SingleWord
                    word={word}
                    isChecked={isChecked}
                    isCorrect={game.good_words.includes(word)} />
                )}
            </div>
            <button onClick={() => handleClick()}>{isChecked ? 'finish game' : 'check answers'}</button>
        </>
    )
}

export default GameScreen;