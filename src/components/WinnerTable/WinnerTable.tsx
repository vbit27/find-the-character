import React from 'react';
import { formatTime } from '../../utils';
import './WinnerTable.scss';

const WinnerTable: React.FC<WinnerTableProps> = ({
  winnersList,
  handleRestartGame,
}) => {
  const sortedList = winnersList.sort((a, b) => a.time - b.time);

  return (
    <>
      <div className="container-table">
        <button onClick={handleRestartGame}>Play Again</button>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Hall of fame</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>Name</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {sortedList.map((winner, index) => (
                <tr key={index}>
                  <td>{winner.name}</td>
                  <td>{formatTime(winner.time)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

interface WinnerTableProps {
  winnersList: Array<winner>;
  handleRestartGame: () => void;
}

interface winner {
  name: string;
  time: number;
}

export default WinnerTable;
