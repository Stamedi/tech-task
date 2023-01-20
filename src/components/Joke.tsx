import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';

const Joke = ({ joke, handleJokes }: any) => {
  return (
    <div className="joke-container">
      <h1>Random jokes to "boost the day":</h1>
      <h3>{joke.setup}</h3>
      <h2>{joke.punchline}</h2>
      <button onClick={() => handleJokes()}>
        New Joke
        <ReplayIcon />
      </button>
    </div>
  );
};

export default Joke;
