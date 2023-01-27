import React, { useContext } from 'react';
import { Typography, Card, styled, Button, Divider } from '@mui/material';
import { AppContext } from '../App';
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

const Joke = () => {
  const context = useContext(AppContext);

  const { joke, handleJokes } = context;
  return (
    <StyledCard>
      <Typography variant="h4" component="h4" sx={{ fontSize: { xs: '26px', sm: '34px' } }}>
        Random jokes to boost the day:
      </Typography>
      <Divider sx={{ color: '#7e9392', width: '100%', paddingTop: '15px' }} />
      <Typography pt={3} variant="h6" component="h6" sx={{ fontSize: { xs: '18px', sm: '24px' } }}>
        {joke.setup}
      </Typography>
      <Typography pt={1} pb={4} variant="h5" component="h5" sx={{ fontSize: { xs: '24px', sm: '30px' } }}>
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
