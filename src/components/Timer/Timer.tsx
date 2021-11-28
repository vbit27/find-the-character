import React, { useContext, useEffect, useState } from 'react';
import { GameStatus } from '../../App';
import { formatTime } from '../../utils';
import classes from './Timer.module.css';

const Timer: React.FC<TimerProps> = ({ gameStart, isGameOver }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval: any;
    if (gameStart) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    if (isGameOver) {
      // clear when the game is over
      clearInterval(interval);
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [gameStart, isGameOver]);

  return (
    <div className={classes.container}>
      <h2> {formatTime(timer)}</h2>
    </div>
  );
};

interface TimerProps {
  isGameOver: boolean;
  gameStart: boolean;
}

export default Timer;
