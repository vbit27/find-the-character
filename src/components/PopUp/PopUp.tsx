import React, { useEffect } from 'react';
import './PopUp.scss';
import clsx from 'clsx';

const PopUp: React.FC<PopUpProps> = ({ match, setVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }, [match]);

  return (
    <div className={clsx('container-popup', match ? 'success' : 'fail')}>
      {match ? <p>It's a match!</p> : <p>Not a match</p>}
    </div>
  );
};

interface PopUpProps {
  match: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default PopUp;
