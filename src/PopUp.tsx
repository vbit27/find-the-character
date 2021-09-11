import React from 'react';
import classes from './PopUp.module.css';
import clsx from 'clsx';

const PopUp: React.FC<PopUpProps> = ({ match }) => {
  return (
    <div
      className={clsx(
        classes.container,
        match ? classes.success : classes.fail
      )}
    >
      {match ? <h2>It's a match!</h2> : <h2>Not a match</h2>}
    </div>
  );
};

interface PopUpProps {
  match: boolean;
}

export default PopUp;
