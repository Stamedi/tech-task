import React, { useContext } from 'react';
import { Grid, Button, styled, Box } from '@mui/material';
import { AppContext } from '../App';
import Photo from './Photo';

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

export type PhotoType = {
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
  images: PhotoType[];
};

const Images = ({ images }: ImagesType) => {
  const context = useContext(AppContext);
  const { handlePagination } = context;
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
        {images.map((photo: PhotoType) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </Grid>
      <LoadMoreButton onClick={() => handlePagination()}>Load More</LoadMoreButton>
    </Box>
  );
};

export default Images;
