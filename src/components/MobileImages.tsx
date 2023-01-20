import React from 'react';
import Images from './Images';
import Joke from './Joke';
const MobileImages = ({ mobileImages, handleClick, handlePagination, joke, handleJokes }: any) => {
  return (
    <>
      <h1>Wallpapers for Mobile Devices</h1>
      <Joke joke={joke} handleJokes={handleJokes} />
      <Images images={mobileImages} handleClick={handleClick} handlePagination={handlePagination} />
    </>
  );
};

export default MobileImages;
