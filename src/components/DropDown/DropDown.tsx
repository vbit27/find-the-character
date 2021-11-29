import React from 'react';
import './DropDown.scss';

const DropDown: React.FC<DropDownProp> = ({
  showMenu,
  position,
  chooseCharacter,
  result,
  dimensions,
}) => {
  //if clicked on the edge of screen show dropdown on the other side of the box
  const checkEdges = () => {
    if (
      dimensions.clientWidth - position.xPos < 120 ||
      dimensions.naturalHeight - position.yPos < 120
    ) {
      return {
        top: position.yPos - 80,
        left: position.xPos - 120,
      };
    } else
      return {
        top: position.yPos + 20,
        left: position.xPos + 20,
      };
  };
  return (
    <div>
      <div style={{ display: showMenu ? 'block' : 'none' }}>
        <div
          className="container-dropdown"
          style={{
            top: position.yPos - 20,
            left: position.xPos - 20,
          }}
        ></div>
        <div className="menu" style={checkEdges()}>
          {result.includes('jack') ? null : (
            <button onClick={() => chooseCharacter('jack')}>Jack</button>
          )}

          {result.includes('ratchet') ? null : (
            <button onClick={() => chooseCharacter('ratchet')}>Ratchet</button>
          )}
          {result.includes('juna') ? null : (
            <button onClick={() => chooseCharacter('juna')}>Yuna</button>
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
  dimensions: {
    naturalHeight: number;
    naturalWidth: number;
    clientHeight: number;
    clientWidth: number;
  };
}
