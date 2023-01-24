import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  Link,
  Button,
  // makeStyles,
} from '@mui/material';
// import { makeStyles } from "@material-ui/core/styles";

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

// const useStyles = makeStyles({
//   flexGrow: {
//     flex: '1',
//   },
//   button: {
//     backgroundColor: '#3c52b2',
//     color: '#fff',
//     '&:hover': {
//       backgroundColor: '#fff',
//       color: '#3c52b2',
//     },
//   },
// });

const Images = ({ images, handleClick, handlePagination }: any) => {
  return (
    <div>
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
            <Card
              sx={{ height: '100%', maxWidth: 400 }}
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#574c4e' }}
              // className="card-content"
            >
              <CardMedia
                component="img"
                image={photo.src.large}
                alt={photo.alt}
                style={{ display: 'flex', flexGrow: 1 }}
              />
              <CardContent>
                <Typography style={{ padding: 0 }} variant="body2" color="#eeefea">
                  Taken by{' '}
                  <Link color="#ffe8e2" href={photo.photographer_url} variant="body2">
                    {photo.photographer}
                  </Link>
                </Typography>
              </CardContent>
              <CardActions style={{ padding: 0 }} onClick={() => handleClick(photo.src.original, photo.id)}>
                <IconButton style={{ padding: 0 }}>
                  <DownloadIcon style={{ color: '#eeefea', padding: '15px' }} />
                </IconButton>
              </CardActions>

              {/* <div key={photo.id} className="single-photo-container">
              <img src={photo.src.large} alt={photo.alt} />
              <div className="card-text-container">
                <p>
                  Taken by <a href={photo.photographer_url}>{photo.photographer}</a>
                </p>
                <button onClick={() => handleClick(photo.src.original, photo.id)}>

                </button>
              </div>
            </div> */}
            </Card>
          </Grid>
          // <div key={photo.id} className="single-photo-container">
          //   <img src={photo.src.large} alt={photo.alt} />
          //   <div className="card-text-container">
          //     <p>
          //       Taken by <a href={photo.photographer_url}>{photo.photographer}</a>
          //     </p>
          //     <button onClick={() => handleClick(photo.src.original, photo.id)}>
          //       <DownloadIcon />
          //     </button>
          //   </div>
          // </div>
        ))}
      </Grid>
      <Button
        variant="contained"
        // className={classes.button}
        // sx={{ color: '#eeefea', backgroundColor: '#574c4e', width: '80%', borderRadius: '40px' }}
        onClick={() => handlePagination()}
      >
        Load More
      </Button>
    </div>
  );
};

export default Images;
