import React from 'react';
import Images from './Images';
import Joke from './Joke';
import { Typography, Box } from '@mui/material';
const MobileImages = ({ mobileImages, handleClick, handlePagination, joke, handleJokes }: any) => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography component="h3" variant="h3" textAlign="center" pt={5}>
        Wallpapers for Mobile Devices
      </Typography>
      <Joke joke={joke} handleJokes={handleJokes} />
      <Images images={mobileImages} handleClick={handleClick} handlePagination={handlePagination} />
    </Box>
  );
};

export default MobileImages;
