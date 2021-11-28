import React, { useState } from 'react';
import './App.scss';
import GameField from './components/GameField/GameField';
import NavBar from './components/Navbar/NavBar';
import Rules from './components/Rules/Rules';

export const GameStatus = React.createContext(false);

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const updateGameStatus = () => {
    setGameStart(!gameStart);
  };

  return (
    <GameStatus.Provider value={gameStart}>
      <div className="App">
        <NavBar gameStart={gameStart} isGameOver={isGameOver} />
        {gameStart ? (
          <GameField />
        ) : (
          <Rules updateGameStatus={updateGameStatus} />
        )}
      </div>
    </GameStatus.Provider>
  );
}

export default App;
