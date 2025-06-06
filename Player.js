import React from 'react';

function Player({ name, runs, wickets }) {
  return (
    <div className="player">
      <h3>{name}</h3>
      <p>Runs: {runs}</p>
      <p>Wickets: {wickets}</p>
    </div>
  );
}

export default Player;
