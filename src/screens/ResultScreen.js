import React from 'react';

const ResultScreen = (props) => {
    return (
        <>
            <h1>Congratulations, {props.nickname}!</h1>
            <h2>Your score: {props.score}</h2>
        </>
    )
}

export default ResultScreen;