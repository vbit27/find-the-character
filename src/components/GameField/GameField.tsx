import React, { useEffect, useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from '../DropDown/DropDown';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase_config';
import PopUp from '../PopUp/PopUp';
import PlayerName from './PlayerName/PlayerName';

const initialDimensions = {
  naturalHeight: 0,
  naturalWidth: 0,
  clientHeight: 0,
  clientWidth: 0,
};

const initialChoice = {
  xPos: 0,
  yPos: 0,
  name: '',
};

const GameField: React.FC<GameFieldProps> = ({
  setIsGameOver,
  isGameOver,
  setPlayersName,
}) => {
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [choice, setChoice] = useState(initialChoice);
  const [result, setResult] = React.useState<Array<String>>([]);
  const [match, setMatch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [characters, setCharacters] = useState(['jack', 'juna', 'ratchet']);

  useEffect(() => {
    let controller = new AbortController();
    getData();
    return () => controller?.abort();
  }, [choice]);

  useEffect(() => {
    if (characters.length === 0) {
      setIsGameOver(true);
    }
  }, [characters]);

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
      removeCharacter(choice.name);
      setMatch(true);
    } else {
      setMatch(false);
    }
    setVisible(true);
  };

  //remove name from character array
  const removeCharacter = (character: string) => {
    let filtered = characters.filter((name) => {
      return name !== character;
    });

    setCharacters(filtered);
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
    <>
      {isGameOver ? (
        <PlayerName setPlayersName={setPlayersName} />
      ) : (
        <div
          className={clsx(classes.border)}
          onClick={(e) => setCoordinates(e)}
        >
          <img
            className={clsx(classes.image)}
            src="/images/image.jpg"
            alt="waldo"
            onLoad={(event) => {
              setDimensions({
                naturalWidth: event.currentTarget.naturalWidth,
                naturalHeight: event.currentTarget.naturalHeight,
                clientHeight: event.currentTarget.offsetHeight,
                clientWidth: event.currentTarget.offsetWidth,
              });
            }}
          />

          <DropDown
            dimensions={dimensions}
            position={position}
            showMenu={showMenu}
            chooseCharacter={chooseCharacter}
            result={result}
          />
          {visible ? <PopUp match={match} setVisible={setVisible} /> : null}
        </div>
      )}
    </>
  );
};

interface GameFieldProps {
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOver: boolean;
  setPlayersName: React.Dispatch<React.SetStateAction<string>>;
}

export default GameField;
