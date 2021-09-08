import React, { useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase_config';

const GameField = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [character, setCharacter] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [dimensions, setDimensions] = useState({
    naturalHeight: 0,
    naturalWidth: 0,
    clientHeight: 0,
    clientWidth: 0,
  });

  const getData = async () => {
    const docRef = doc(db, 'characters', 'jack');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const setCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    setXPos(e.pageX);
    setYPos(e.pageY);
    setShowMenu(!showMenu);
    //const click = e.currentTarget.getBoundingClientRect();

    //console.log(docRef);
    getData();
    console.log(dimensions);
  };

  const chooseCharacter = (name: string) => {
    setCharacter(name);
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
          setDimensions({
            naturalWidth: event.currentTarget.naturalWidth,
            naturalHeight: event.currentTarget.naturalHeight,
            clientHeight: event.currentTarget.clientHeight,
            clientWidth: event.currentTarget.clientWidth,
          });
        }}
      />

      <DropDown
        xPos={xPos}
        yPos={yPos}
        showMenu={showMenu}
        chooseCharacter={chooseCharacter}
      />
    </div>
  );
};

export default GameField;
