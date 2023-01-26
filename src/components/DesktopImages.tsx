import React from 'react';
import Images from './Images';
import Joke from './Joke';
import { Typography, Box } from '@mui/material';

const DesktopImages = ({ desktopImages, handleClick, handlePagination, joke, handleJokes }: any) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography component="h3" variant="h3" textAlign="center" pt={5}>
        Wallpapers for Desktop Devices
      </Typography>
      <Joke joke={joke} handleJokes={handleJokes} />
      <Images images={desktopImages} handleClick={handleClick} handlePagination={handlePagination} />
    </Box>
  );
};

export default DesktopImages;
