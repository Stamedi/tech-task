import React from 'react';
import Images from './Images';
import Joke from './Joke';
const Home = ({ homeImages, handleClick, handlePagination, joke, handleJokes }: any) => {
  return (
    <>
      <h1>Home Page / Newest Wallpapers</h1>
      <p className="home-p">
        On this website you can download any wallpaper that you like or if you are curious who made the wallpaper you
        can go to the artist page and check out their other wallpapers/images.
      </p>
      <Joke joke={joke} handleJokes={handleJokes} />
      <Images images={homeImages} handleClick={handleClick} handlePagination={handlePagination} />
    </>
  );
};

export default Home;
