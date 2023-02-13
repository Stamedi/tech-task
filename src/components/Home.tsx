import React, { useContext } from 'react';
import Images from './Images';
import Joke from './Joke';
import { Typography, Box } from '@mui/material';
import { AppContext } from '../App';
const Home = () => {
  const context = useContext(AppContext);
  const { homeImages } = context;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Typography
        component="h3"
        variant="h3"
        sx={{ fontSize: { xs: '34px', sm: '42px', textAlign: 'center', fontWeight: '600' } }}
        pt={5}
      >
        Home Page / Newest Wallpapers
      </Typography>
      <Typography component="h5" variant="h5" sx={{ fontSize: { xs: '22px' } }} pt={3} textAlign="center">
        On this website you can download any wallpaper that you like or if you are curious who made the wallpaper you
        can go to the artist page and check out their other wallpapers/images.
      </Typography>
      <Joke />
      <Images images={homeImages} />
    </Box>
  );
};

export default Home;
