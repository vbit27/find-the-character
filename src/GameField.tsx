import Box from '@material-ui/core/Box';
import React from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';

const GameField = () => {
  return (
    <div className={clsx(classes.border)}>
      <img
        className={clsx(classes.image)}
        src="/images/wallpaper.jpg"
        alt="waldo"
      />
      <DropDown />
    </div>
  );
};

export default GameField;
