import React, { useState } from 'react';
import './App.css';
import GameField from './GameField';
import NavBar from './NavBar';
import Rules from './Rules';

function App() {
  const [gameStatus, setGameStatus] = useState(false);

  const updateGameStatus = () => {
    setGameStatus(!gameStatus);
  };

  return (
    <div className="App">
      <NavBar />
      {gameStatus ? <GameField /> : <Rules updateStatus={updateGameStatus} />}
    </div>
  );
}

export default App;
