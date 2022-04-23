import { useState } from 'react';

import './App.css';

const StartScreen = () => {
  return <div>Start screen</div>
}

const GameScreen = () => {
  return <div>Game screen</div>
}

const ResultScreen = () => {
  return <div>Result screen</div>
}

function App() {
  const [currentScreen, setCurrentScreen] = useState('start-screen');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'start-screen':
        return <StartScreen />
      case 'game-screen':
        return <GameScreen />
      case 'result-screen':
        return <ResultScreen />
      default:
        return <StartScreen />
    }
  }

  return (
    <div className="App">
      {renderScreen()}
    </div>
  );
}

export default App;
