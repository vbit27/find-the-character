import React, { useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase_config';

const GameField = () => {
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [dimensions, setDimensions] = useState({
    naturalHeight: 0,
    naturalWidth: 0,
    clientHeight: 0,
    clientWidth: 0,
  });
  const [choice, setChoice] = useState({
    realXValue: 0,
    realYValue: 0,
    name: '',
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
    setPosition({ xPos: e.pageX, yPos: e.pageY });
    setShowMenu(!showMenu);
  };

  const chooseCharacter = (name: string) => {
    setChoice({
      realXValue:
        (position.xPos * dimensions.naturalWidth) / dimensions.clientWidth,
      realYValue:
        (position.yPos * dimensions.naturalHeight) / dimensions.clientHeight,
      name: name,
    });
    getData();
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
        position={position}
        showMenu={showMenu}
        chooseCharacter={chooseCharacter}
      />
    </div>
  );
};

export default GameField;
