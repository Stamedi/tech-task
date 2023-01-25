/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Card, styled, Button } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '70%',
  justifyContent: 'center',
  textAlign: 'center',
});

const Joke = ({ joke, handleJokes }: any) => {
  return (
    <StyledCard>
      <Typography variant="h4" component="h4">
        Random jokes to "boost the day":
      </Typography>
      <Typography variant="h6" component="h6">
        {joke.setup}
      </Typography>
      <Typography variant="h5" component="h5">
        {joke.punchline}
      </Typography>
      <Button onClick={() => handleJokes()}>
        New Joke
        <ReplayIcon />
      </Button>
    </StyledCard>
  );
};

export default Joke;
