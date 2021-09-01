import React, { useState } from 'react';
import './App.css';
import Rules from './Rules';

function App() {
  const [gameStatus, setGameStatus] = useState(false);

  const updateGameStatus = () => {
    setGameStatus(!gameStatus);
  };

  return (
    <div className="App">
      {gameStatus ? (
        <h1>Playing</h1>
      ) : (
        <Rules updateStatus={updateGameStatus} />
      )}
    </div>
  );
}

export default App;
