import './Rules.scss';
import React from 'react';

const Rules: React.FC<RulesProps> = ({ updateGameStatus }) => {
  return (
    <>
      <div className="container">
        <h1>Find the caracters</h1>
        <div className="card">
          <div className="card__tittle">
            <h3>Game Rules</h3>
          </div>
          <div className="card__rules">
            - Search for the characters on the picture <br />- Click on the
            character and choose his name <br />- Repeat until you find all
            three characters <br />- Be as fast as possible
          </div>
          <button className="card__button" onClick={updateGameStatus}>
            Start Game
          </button>
        </div>
      </div>
    </>
  );
};

interface RulesProps {
  updateGameStatus: () => void;
}

export default Rules;
