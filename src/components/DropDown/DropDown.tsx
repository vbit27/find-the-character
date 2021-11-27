import clsx from 'clsx';
import React from 'react';
import classes from './DropDown.module.css';

const DropDown: React.FC<DropDownProp> = ({
  showMenu,
  position,
  chooseCharacter,
  result,
}) => {
  return (
    <div>
      <div style={{ display: showMenu ? 'block' : 'none' }}>
        <div
          className={clsx(classes.container)}
          style={{
            top: position.yPos - 20,
            left: position.xPos - 20,
          }}
        ></div>
        <div
          className={clsx(classes.menu)}
          style={{
            top: position.yPos + 30,
            left: position.xPos + 30,
          }}
        >
          {result.includes('jack') ? null : (
            <button onClick={() => chooseCharacter('jack')}>Jak</button>
          )}

          {result.includes('ratchet') ? null : (
            <button onClick={() => chooseCharacter('ratchet')}>Ratchet</button>
          )}
          {result.includes('juna') ? null : (
            <button onClick={() => chooseCharacter('juna')}>Juna</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

interface DropDownProp {
  position: {
    xPos: number;
    yPos: number;
  };
  showMenu: boolean;
  chooseCharacter: (name: string) => void;
  result: Array<String>;
}
