import React, { useState } from 'react';
import './PlayerName.scss';

const PlayerName: React.FC<PlayersNameProps> = ({ addWinner }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addWinner(input);
  };
  return (
    <>
      <div className="container">
        <div className="card">
          <h3 className="card__tittle">
            Add your name to be at the hall of fame
          </h3>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <input
              value={input}
              className="form__imput"
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="e.g. Legolas"
            />
            <button type="submit" className="form__button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

interface PlayersNameProps {
  addWinner: (name: string) => void;
}

export default PlayerName;
