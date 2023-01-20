import React from 'react';
import Images from './Images';
const Home = ({ homeImages, handleClick, handlePagination }: any) => {
  return <Images images={homeImages} handleClick={handleClick} handlePagination={handlePagination} />;
};

export default Home;
