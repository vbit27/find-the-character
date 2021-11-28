import React, { useEffect } from 'react';
import classes from './PopUp.module.css';
import clsx from 'clsx';

const PopUp: React.FC<PopUpProps> = ({ match, setVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, [match]);

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
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default PopUp;
