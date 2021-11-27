import React, { useState } from 'react';
import './App.scss';
import GameField from './components/GameField/GameField';
import NavBar from './components/Navbar/NavBar';
import Rules from './components/Rules/Rules';
import Timer from './components/Timer/Timer';

export const GameStatus = React.createContext(false);

function App() {
  const [gameStatus, setGameStatus] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  const updateGameStatus = () => {
    setGameStatus(!gameStatus);
  };

  return (
    <GameStatus.Provider value={gameEnded}>
      <div className="App">
        <NavBar />
        {gameStatus ? <GameField /> : <Rules updateStatus={updateGameStatus} />}
      </div>
    </GameStatus.Provider>
  );
}

export default App;
