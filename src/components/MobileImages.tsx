import React from 'react';
import Images from './Images';

const MobileImages = ({ mobileImages, handleClick, handlePagination }: any) => {
  return <Images images={mobileImages} handleClick={handleClick} handlePagination={handlePagination} />;
};

export default MobileImages;
