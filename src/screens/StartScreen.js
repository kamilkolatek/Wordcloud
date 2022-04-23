import { useState } from 'react';

const StartScreen = ({ setCurrentScreen, setNickname }) => {
    const [name, setName] = useState('')

    const handleSubmit = () => {
        setNickname(name);
        setCurrentScreen('game-screen');
    }

    return (
        <>
            <h1>Wordcloud game</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="nickname-input"
                    type="text"
                    placeholder="Enter your nickname here..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">play</button>
            </form>
        </>
    )
}

export default StartScreen;