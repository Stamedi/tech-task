import React, { useContext } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Link, Button, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { AppContext } from '../App';

const CardStyled = styled(Card)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#574c4e',
  maxWidth: '350px',
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

type ImageType = {
  image: {
    id: string;
    src: {
      original: string;
      large: string;
    };
    photographer_url: string;
    photographer: string;
    alt: string;
  };
};

const Image = ({ image }: ImageType) => {
  const context = useContext(AppContext);
  const { handleClick } = context;
  return (
    <Grid item xl={4}>
      <CardStyled>
        <CardMedia
          component="img"
          image={image.src.large}
          alt={image.alt}
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
              href={image.photographer_url}
              sx={{ transition: '0.3s', '&:hover': { color: '#fefefe' } }}
            >
              {image.photographer}
            </Link>
          </Typography>
        </CardContent>
        <DownloadButton onClick={() => handleClick(image.src.original, image.id)}>
          <DownloadIcon />
        </DownloadButton>
      </CardStyled>
    </Grid>
  );
};

export default Image;
