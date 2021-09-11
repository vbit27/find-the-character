import React from 'react';
import classes from './PopUp.module.css';
import clsx from 'clsx';

const PopUp = () => {
  return (
    <>
      <div className={clsx(classes.container, classes.success)}>
        <h2>It's a match!</h2>
      </div>
      <div className={clsx(classes.container, classes.fail)}>
        <h2>Not a match</h2>
      </div>
    </>
  );
};

export default PopUp;
