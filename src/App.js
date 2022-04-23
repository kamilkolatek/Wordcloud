import { useState, useEffect } from 'react';

import StartScreen from './screens/StartScreen';

import { response } from './mocks/api';
import { randomItem } from './utils/utils'

import './App.css';

const GameScreen = () => {
  return <div>Game screen</div>
}

const ResultScreen = () => {
  return <div>Result screen</div>
}

function App() {
  const [nickname, setNickname] = useState('');
  const [game, setGame] = useState({});
  const [currentScreen, setCurrentScreen] = useState('start-screen');

  useEffect(() => setGame(randomItem(response)));

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start-screen':
        return <StartScreen setNickname={setNickname} setCurrentScreen={setCurrentScreen}  />
      case 'game-screen':
        return <GameScreen />
      case 'result-screen':
        return <ResultScreen />
      default:
        return <StartScreen setNickname={setNickname} setCurrentScreen={setCurrentScreen}  />
    }
  }

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
