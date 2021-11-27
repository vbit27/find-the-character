import React, { useContext, useEffect, useState } from 'react';
import { GameStatus } from '../../App';
import classes from './Timer.module.css';

const Timer = () => {
  const gameEnded = useContext(GameStatus);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (gameEnded) {
      setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      });
    }
  }, [gameEnded]);

  return (
    <div className={classes.container}>
      <h2>{time}</h2>
    </div>
  );
};

export default Timer;
