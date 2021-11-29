import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import './App.scss';
import GameField from './components/GameField/GameField';
import PlayerName from './components/PlayerName/PlayerName';
import NavBar from './components/Navbar/NavBar';
import Rules from './components/Rules/Rules';
import WinnerTable from './components/WinnerTable/WinnerTable';
import { db } from './firebase_config';

export const GameStatus = React.createContext(false);

function App() {
  const [isGameOver, setIsGameOver] = useState(true);
  const [timer, setTimer] = useState(0);
  const [winnersList, setWinnersList] = useState<Array<winner>>([]);

  const collRef = collection(db, 'winners');

  const updateGameStatus = () => {
    setIsGameOver(false);
  };

  const addWinner = (name: string) => {
    addDoc(collRef, {
      name,
      time: timer,
    });
    getWinners();
  };

  const getWinners = () => {
    getWinnerList();
  };

  const getWinnerList = async () => {
    try {
      await getDocs(collRef).then((snapshot) => {
        let winners: any = [];
        snapshot.docs.forEach((doc) => {
          winners.push({ ...doc.data() });
        });
        setWinnersList(winners);
        console.log(winners);
      });
    } catch (error) {
      console.log('No such document!', error);
    }
  };

  const handleRestartGame = () => {
    setIsGameOver(true);
    setTimer(0);
    setWinnersList([]);
  };

  if (winnersList.length > 0)
    return (
      <WinnerTable
        winnersList={winnersList}
        handleRestartGame={handleRestartGame}
      />
    );

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

interface winner {
  name: string;
  time: number;
}

export default App;
