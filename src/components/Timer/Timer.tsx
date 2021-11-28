import React, { useContext, useEffect, useState } from 'react';
import { GameStatus } from '../../App';
import { formatTime } from '../../utils';
import classes from './Timer.module.css';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const gameStatus = useContext(GameStatus);

  useEffect(() => {
    let interval: any;
    if (gameStatus) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [gameStatus]);

  return (
    <div className={classes.container}>
      <h2> {formatTime(timer)}</h2>
    </div>
  );
};

export default Timer;
