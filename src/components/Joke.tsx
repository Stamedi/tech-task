/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, Card, styled, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '70%',
  justifyContent: 'center',
  textAlign: 'center',
  background: '#eeefea',
  padding: '25px',
  marginTop: '50px',
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
    top: '-4px',
    cursor: 'pointer',
  },
});

const StyledButton = styled(Button)({
  color: '#7e9392',
  border: '2px solid #7e9392',
  fontWeight: '600',
});

const Joke = ({ joke, handleJokes }: any) => {
  return (
    <StyledCard>
      <Typography variant="h4" component="h4">
        Random jokes to "boost the day":
      </Typography>
      <Typography pt={3} variant="h6" component="h6">
        {joke.setup}
      </Typography>
      <Typography pt={1} pb={4} variant="h5" component="h5">
        {joke.punchline}
      </Typography>
      <StyledButton onClick={() => handleJokes()}>
        New Joke
        <ReplayIcon />
      </StyledButton>
    </StyledCard>
  );
};

export default Joke;
