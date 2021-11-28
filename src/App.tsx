import React, { useEffect, useState } from 'react';
import './App.scss';
import GameField from './components/GameField/GameField';
import PlayerName from './components/GameField/PlayerName/PlayerName';
import NavBar from './components/Navbar/NavBar';
import Rules from './components/Rules/Rules';

export const GameStatus = React.createContext(false);

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [isGameOver, setIsGameOver] = useState(true);
  const [timer, setTimer] = useState(0);
  const [playersName, setPlayersName] = useState('');

  const updateGameStatus = () => {
    setIsGameOver(false);
  };

  useEffect(() => {
    console.log(playersName);
  }, [playersName]);

  return (
    <div className="App">
      <NavBar
        gameStart={gameStart}
        isGameOver={isGameOver}
        timer={timer}
        setTimer={setTimer}
      />

      {timer ? (
        <GameField
          setIsGameOver={setIsGameOver}
          isGameOver={isGameOver}
          setPlayersName={setPlayersName}
        />
      ) : (
        <Rules updateGameStatus={updateGameStatus} />
      )}
    </div>
  );
}

export default App;
