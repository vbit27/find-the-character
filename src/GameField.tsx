import React, { useEffect, useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';
import {
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
} from 'firebase/firestore';
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
    xPos: 0,
    yPos: 0,
    name: '',
  });

  useEffect(() => {
    compareChoice();
  }, [choice]);

  const compareChoice = () => {
    if (choice.name) {
      getData();
    }
  };

  const getData = async () => {
    const docRef = doc(db, 'characters', choice.name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      checkForHit(docSnap);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  const checkForHit = (doc: any) => {
    if (
      choice.yPos > doc.data().yPos - 150 &&
      choice.yPos < doc.data().yPos + 150 &&
      choice.xPos > doc.data().xPos - 150 &&
      choice.xPos < doc.data().xPos + 150
    ) {
      console.log('yaaaaaaaaaaay');
    }
  };

  const setCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ xPos: e.pageX, yPos: e.pageY });
    setShowMenu(!showMenu);
  };

  const chooseCharacter = (name: string) => {
    setChoice({
      xPos: (position.xPos * dimensions.naturalWidth) / dimensions.clientWidth,
      yPos:
        (position.yPos * dimensions.naturalHeight) / dimensions.clientHeight,
      name: name,
    });
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
