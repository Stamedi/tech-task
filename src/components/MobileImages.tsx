import React, { useContext } from 'react';
import Images from './Images';
import Joke from './Joke';
import { Typography, Box } from '@mui/material';
import { AppContext } from '../App';

const MobileImages = () => {
  const context = useContext(AppContext);

  const { mobileImages } = context;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography component="h3" variant="h3" textAlign="center" pt={5}>
        Wallpapers for Mobile Devices
      </Typography>
      <Joke />
      <Images images={mobileImages} />
    </Box>
  );
};

export default MobileImages;
