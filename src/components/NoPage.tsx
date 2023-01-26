import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const NoPage = () => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h1" component="h1" mr={3}>
          Error
        </Typography>
        <ErrorIcon sx={{ width: '100px', height: 'auto' }} />
      </Box>
      <Button sx={{ marginTop: '100px' }} href="/">
        Return to Home Page
      </Button>
    </Box>
  );
};

export default NoPage;
