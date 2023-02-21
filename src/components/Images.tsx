import React, { useContext } from 'react';
import { Grid, Box, Typography, Pagination, Container } from '@mui/material';
import { AppContext } from '../App';
import Image from './Image';
import Filters from './Filters';

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
  images: {
    images: ImageType[];
    imagesAmount: number;
  };
};

const Images = ({ images }: ImagesType) => {
  const context = useContext(AppContext);
  const { getPage } = context;
  console.log(images);
  return (
    <Container>
      <Filters />
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
          {images.images.length > 0 ? (
            images.images.map((image: ImageType) => <Image key={image.id} image={image} />)
          ) : (
            <Typography variant="h2" component="h2" textAlign="center">
              No results found
            </Typography>
          )}
        </Grid>
        <Pagination
          onChange={(event) => getPage(event)}
          count={Math.floor(images.imagesAmount / 9)}
          variant="outlined"
          shape="rounded"
          hidePrevButton
          hideNextButton
          sx={{ color: '#574c4e' }}
        />
      </Box>
    </Container>
  );
};

export default Images;
