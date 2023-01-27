import React, { useContext } from 'react';
import Images from './Images';
import Joke from './Joke';
import { Typography, Box } from '@mui/material';
import { AppContext } from '../App';

const DesktopImages = () => {
  const context = useContext(AppContext);

  const { desktopImages } = context;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography component="h3" variant="h3" textAlign="center" pt={5}>
        Wallpapers for Desktop Devices
      </Typography>
      <Joke />
      <Images images={desktopImages} />
    </Box>
  );
};

export default DesktopImages;
