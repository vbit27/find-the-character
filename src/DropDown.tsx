import clsx from 'clsx';
import React from 'react';
import classes from './DropDown.module.css';

const DropDown: React.FC<DropDownProp> = ({ xPos, yPos, showMenu }) => {
  return (
    <div>
      <div style={{ display: showMenu ? 'block' : 'none' }}>
        <div
          className={clsx(classes.container)}
          style={{
            top: yPos - 20,
            left: xPos - 20,
          }}
        ></div>
        <div
          className={clsx(classes.menu)}
          style={{
            top: yPos + 30,
            left: xPos + 30,
          }}
        >
          <h3>Jak</h3>
          <h3>Ratchet</h3>
          <h3>Juna</h3>
        </div>
      </div>
    </div>
  );
};

export default DropDown;

interface DropDownProp {
  xPos: number;
  yPos: number;
  showMenu: boolean;
}
