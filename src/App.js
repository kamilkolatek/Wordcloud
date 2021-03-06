import { useState, useEffect } from 'react';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';

import { response } from './mocks/api';
import { randomItem } from './utils/utils'

import './App.css';

function App() {
  const [nickname, setNickname] = useState('');
  const [score, setScore] = useState(0);
  const [game, setGame] = useState({});
  const [currentScreen, setCurrentScreen] = useState('start-screen');

  useEffect(() => setGame(randomItem(response)), []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start-screen':
        return <StartScreen setNickname={setNickname} setCurrentScreen={setCurrentScreen} />
      case 'game-screen':
        return <GameScreen game={game} setScore={setScore} setCurrentScreen={setCurrentScreen} />
      case 'result-screen':
        return <ResultScreen nickname={nickname} score={score} />
      default:
        return <StartScreen setNickname={setNickname} setCurrentScreen={setCurrentScreen} />
    }
  }

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
