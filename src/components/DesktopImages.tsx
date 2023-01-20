import React from 'react';
import Images from './Images';
import Joke from './Joke';

const DesktopImages = ({ desktopImages, handleClick, handlePagination, joke, handleJokes }: any) => {
  return (
    <>
      <h1>Wallpapers for Desktop Devices</h1>
      <Joke joke={joke} handleJokes={handleJokes} />
      <Images images={desktopImages} handleClick={handleClick} handlePagination={handlePagination} />
    </>
  );
};

export default DesktopImages;
