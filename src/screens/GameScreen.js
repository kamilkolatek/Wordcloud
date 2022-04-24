import React, { useState } from 'react';
import SingleWord from '../components/SingleWord';

const GameScreen = ({ setCurrentScreen, setScore, game }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedWords, setSelectedWords] = useState([]);

    const handleClick = () => {
        if (isChecked) {
            setScore(calculateScore());
            setCurrentScreen('result-screen');
        } else {
            setIsChecked(true);
        }
    }

    const toggleWord = (word) => {
        if (isChecked) return;
        if (selectedWords.includes(word)) {
            setSelectedWords(selectedWords.filter(item => item !== word));
        } else {
            setSelectedWords([...selectedWords, word]);
        }
    }

    const calculateScore = () => {
        let correctAnswers = 0, incorrectAnswers = 0;
        for (let i = 0; i < selectedWords.length; i++) {
            if (game.good_words.includes(selectedWords[i])) {
                correctAnswers++;
            } else {
                incorrectAnswers++;
            }
        }
        return (correctAnswers * 2) - (incorrectAnswers + game.good_words.length - correctAnswers);
    }

    return (
        <>
            <h1>{game.question}</h1>
            <div className="board">
                {game.all_words.map((word) => <SingleWord
                    toggleWord={toggleWord}
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