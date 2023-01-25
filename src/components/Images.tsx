import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { Grid, Card, CardMedia, CardContent, Typography, Link, Button, styled, Container } from '@mui/material';

const CardStyled = styled(Card)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#574c4e',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
    top: '-4px',
    backgroundColor: '#665a5c',
    cursor: 'pointer',
  },
});

const DownloadButton = styled(Button)({
  padding: '20px',
  height: '20px',
  color: '#574c4e',
  backgroundColor: '#eeefea',
  width: '75%',
  marginBottom: '25px',
  borderRadius: '40px',
  border: '2px solid #eeefea',
  '&:hover': {
    backgroundColor: '#574c4e',
    color: '#eeefea',
  },
});

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

type Image = {
  id: number;
  src: {
    original: string;
    large: string;
  };
  photographer_url: string;
  photographer: string;
  alt: string;
};

const Images = ({ images, handleClick, handlePagination }: any) => {
  return (
    <Container>
      <Grid
        container
        rowSpacing={10}
        columnSpacing={7}
        justifyContent="space-evenly"
        alignItems="stretch"
        mt={1}
        mb={4}
      >
        {images.map((photo: Image) => (
          <Grid item key={photo.id} xl={4}>
            <CardStyled>
              <CardMedia
                component="img"
                image={photo.src.large}
                alt={photo.alt}
                sx={{
                  display: 'flex',
                  flexGrow: 1,
                }}
              />
              <CardContent>
                <Typography sx={{ padding: 0, color: '#eeefea' }} component="p" variant="h5">
                  Taken by{' '}
                  <Link
                    color="#ffe8e2"
                    href={photo.photographer_url}
                    sx={{ transition: '0.3s', '&:hover': { color: '#fefefe' } }}
                  >
                    {photo.photographer}
                  </Link>
                </Typography>
              </CardContent>
              <DownloadButton onClick={() => handleClick(photo.src.original, photo.id)}>
                <DownloadIcon />
              </DownloadButton>
            </CardStyled>
          </Grid>
        ))}
      </Grid>
      <LoadMoreButton onClick={() => handlePagination()}>Load More</LoadMoreButton>
    </Container>
  );
};

export default Images;
