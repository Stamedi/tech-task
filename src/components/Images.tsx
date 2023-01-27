import React, { useContext, useState } from 'react';
import { Grid, Button, styled, Box } from '@mui/material';
import { AppContext } from '../App';
import Image from './Image';

const LoadMoreButton = styled(Button)({
  color: '#eeefea',
  backgroundColor: '#574c4e',
  width: '80%',
  borderRadius: '40px',
  border: '2px solid #574c4e',
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  '&:hover': {
    color: '#574c4e',
    backgroundColor: '#eeefea',
  },
});

export type ImageType = {
  id: string;
  src: {
    original: string;
    large: string;
  };
  photographer_url: string;
  photographer: string;
  alt: string;
};

type ImagesType = {
  images: ImageType[];
};

const Images = ({ images }: ImagesType) => {
  const context = useContext(AppContext);
  const { handleLoadMoreImg } = context;
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Grid
        container
        rowSpacing={10}
        columnSpacing={7}
        justifyContent="space-evenly"
        alignItems="stretch"
        mt={1}
        mb={4}
      >
        {images.map((image: ImageType) => (
          <Image key={image.id} image={image} />
        ))}
      </Grid>
      <LoadMoreButton onClick={() => handleLoadMoreImg()}>Load More</LoadMoreButton>
    </Box>
  );
};

export default Images;
