import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import Joke from './Joke';
import Images from './Images';
import { AppContext } from '../App';

const SearchImages = () => {
  const context = useContext(AppContext);

  const { searchImages } = context;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography
        component="h3"
        variant="h3"
        sx={{ fontSize: { xs: '34px', sm: '42px', fontWeight: '600' } }}
        textAlign="center"
        pt={5}
      >
        Search Wallpapers
      </Typography>
      <Joke />
      <Images images={searchImages} />
    </Box>
  );
};

export default SearchImages;
