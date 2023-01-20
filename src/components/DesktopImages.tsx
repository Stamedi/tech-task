import React from 'react';
import Images from './Images';

const DesktopImages = ({ desktopImages, handleClick, handlePagination }: any) => {
  return <Images images={desktopImages} handleClick={handleClick} handlePagination={handlePagination} />;
};

export default DesktopImages;
