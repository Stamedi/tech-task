import React, { useContext } from 'react';
import { Grid, Box, Typography, Pagination } from '@mui/material';
import { AppContext } from '../App';
import Image from './Image';

// const LoadMoreButton = styled(Button)({
//   color: '#eeefea',
//   backgroundColor: '#574c4e',
//   width: '80%',
//   borderRadius: '40px',
//   border: '2px solid #574c4e',
//   display: 'flex',
//   justifyContent: 'center',
//   alignSelf: 'center',
//   '&:hover': {
//     color: '#574c4e',
//     backgroundColor: '#eeefea',
//   },
// });

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
  const { getPage, currentPage } = context;
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
        {images.length > 0 ? (
          images.map((image: ImageType) => <Image key={image.id} image={image} />)
        ) : (
          <Typography variant="h2" component="h2" textAlign="center">
            No results found
          </Typography>
        )}
      </Grid>
      {/* <LoadMoreButton onClick={() => handleLoadMoreImg()}>Load More</LoadMoreButton> */}
      <Pagination
        onChange={(event) => getPage(event)}
        count={Math.floor(8000 / 9)}
        variant="outlined"
        shape="rounded"
        hidePrevButton
        hideNextButton
        sx={{ color: '#574c4e' }}
      />
    </Box>
  );
};

export default Images;
