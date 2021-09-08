import React, { useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase_config';

const GameField = () => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [character, setCharacter] = useState('');
  const [naturalHeight, setNaturalHeight] = useState(0);
  const [naturalWidth, setNaturalWidth] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const docRef = doc(db, 'characters', 'jack');

  const setCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    setClientX(e.pageX);
    setClientY(e.pageY);
    setShowMenu(!showMenu);
    //const click = e.currentTarget.getBoundingClientRect();

    console.log(docRef);
  };

  const chooseCharacter = (name: string) => {
    setCharacter(name);
    console.log(character, clientX, naturalWidth);
  };

  /*

    let realXValue = x * yourImageReal.width / yourImage.clientWidth
let realYValue = y * yourImageReal.height / yourImage.clientHeight
*/
  return (
    <div className={clsx(classes.border)} onClick={(e) => setCoordinates(e)}>
      <img
        className={clsx(classes.image)}
        src="/images/image.jpg"
        alt="waldo"
        onLoad={(event) => {
          setNaturalWidth(event.currentTarget.naturalWidth);
          setNaturalHeight(event.currentTarget.clientWidth);
        }}
      />

      <DropDown
        xPos={clientX}
        yPos={clientY}
        showMenu={showMenu}
        chooseCharacter={chooseCharacter}
      />
    </div>
  );
};

export default GameField;
