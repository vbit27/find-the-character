import React, { useEffect, useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase_config';
import PopUp from './PopUp';

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
  const [result, setResult] = React.useState<Array<String>>([]);
  const [match, setMatch] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData();
  }, [choice]);

  useEffect(() => {
    console.log(result);
  }, [result]);

  // get data afrom db
  const getData = async () => {
    if (choice.name) {
      const docRef = doc(db, 'characters', choice.name);
      try {
        const docSnap = await getDoc(docRef);
        checkForHit(docSnap);
      } catch (error) {
        console.log('No such document!', error);
      }
    }
  };

  // Check if there is a match
  const checkForHit = (doc: any) => {
    if (
      choice.yPos > doc.data().yPos - 150 &&
      choice.yPos < doc.data().yPos + 150 &&
      choice.xPos > doc.data().xPos - 150 &&
      choice.xPos < doc.data().xPos + 150
    ) {
      setResult([...result, choice.name]);
      setMatch(true);
      setVisible(true);
    } else {
      setMatch(false);
      setVisible(true);
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
        result={result}
      />
      {visible ? <PopUp match={match} setVisible={setVisible} /> : null}
    </div>
  );
};

export default GameField;
