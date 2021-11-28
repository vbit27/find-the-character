import jak from '../../assets/jak.svg';
import yuna from '../../assets/yuna.svg';
import ratchet from '../../assets/ratchet.svg';
import './NavBar.scss';
import { useEffect, useState } from 'react';
import { formatTime } from '../../utils';

const NavBar: React.FC<NavBarProps> = ({ isGameOver, setTimer, timer }) => {
  //start timer
  useEffect(() => {
    let interval: any;
    if (!isGameOver) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (isGameOver) {
      // clear when the game is over
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isGameOver]);
  return (
    <>
      <nav className="nav">
        <div className="nav__img__container">
          <img src={jak} alt="jak" className="nav__img" />
          <img src={yuna} alt="yuna" className="nav__img" />
          <img src={ratchet} alt="ratchet" className="nav__img" />
        </div>
        {!isGameOver && <div className="timer">{formatTime(timer)}</div>}
      </nav>
    </>
  );
};

interface NavBarProps {
  isGameOver: boolean;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  timer: number;
}

export default NavBar;
