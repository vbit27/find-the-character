import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './App.scss';
import GameField from './components/GameField/GameField';
import PlayerName from './components/GameField/PlayerName/PlayerName';
import NavBar from './components/Navbar/NavBar';
import Rules from './components/Rules/Rules';
import { db } from './firebase_config';

export const GameStatus = React.createContext(false);

function App() {
  const [isGameOver, setIsGameOver] = useState(true);
  const [timer, setTimer] = useState(0);
  const [winnersList, setWinnersList] = useState('');

  const collRef = collection(db, 'winners');

  const updateGameStatus = () => {
    setIsGameOver(false);
  };

  const addWinner = (name: string) => {
    addDoc(collRef, {
      name,
      time: timer,
    });
  };

  const getPlayerData = async () => {
    try {
      const docSnap = await getDocs(collRef);
      console.log(docSnap);
    } catch (error) {
      console.log('No such document!', error);
    }
  };

  return (
    <div className="App">
      <NavBar isGameOver={isGameOver} timer={timer} setTimer={setTimer} />
      {timer ? (
        <GameField
          setIsGameOver={setIsGameOver}
          isGameOver={isGameOver}
          addWinner={addWinner}
        />
      ) : (
        <Rules updateGameStatus={updateGameStatus} />
      )}
    </div>
  );
}

export default App;
