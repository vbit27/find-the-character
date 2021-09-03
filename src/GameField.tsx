import React, { useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';

const GameField = () => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const setCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
    setShowMenu(true);
    console.log(e.clientX, e.clientY);
  };

  return (
    <div className={clsx(classes.border)} onClick={(e) => setCoordinates(e)}>
      <img
        className={clsx(classes.image)}
        src="/images/image.jpg"
        alt="waldo"
      />
      <DropDown clientX={clientX} clientY={clientY} showMenu={setShowMenu} />
    </div>
  );
};

export default GameField;
