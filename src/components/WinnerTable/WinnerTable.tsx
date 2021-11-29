import React from 'react';
import { formatTime } from '../../utils';
import './WinnerTable.scss';

const WinnerTable: React.FC = () => {
  let winners = [
    {
      name: 'helloooooooo',
      time: 22,
    },
    {
      time: 15,
      name: 'sami',
    },
    {
      time: 12,
      name: 'sami',
    },
  ];

  return (
    <>
      <div className="container">
        <button>Play Again</button>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>The hall of fame</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td>Name</td>
                <td>Time</td>
              </tr>
            </thead>
            <tbody>
              {winners.map((winner) => (
                <tr>
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

export default WinnerTable;
