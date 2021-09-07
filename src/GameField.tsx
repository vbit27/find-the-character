import React, { useState } from 'react';
import classes from './GameField.module.css';
import clsx from 'clsx';
import DropDown from './DropDown';

const GameField = () => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const setCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    setClientX(e.pageX);
    setClientY(e.pageY);
    setShowMenu(true);
    const click = e.currentTarget.getBoundingClientRect();

    console.log(click);
  };

  /*
var canvasX = relativeX * mainCanvas.width / mainCanvas.clientWidth;
    var canvasY = relativeY * mainCanvas.height / mainCanvas.clientHeight;

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
          console.log(event.currentTarget.naturalWidth);
          console.log(event.currentTarget.naturalHeight);
        }}
      />

      <DropDown xPos={clientX} yPos={clientY} showMenu={setShowMenu} />
    </div>
  );
};

export default GameField;
