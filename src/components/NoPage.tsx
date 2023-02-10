import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const NoPage = () => {
  return (
    <Box mt={7} display="flex" alignItems="center" flexDirection="column">
      <Box display="flex" alignItems="center" justifyContent="center" mt={10}>
        <Typography variant="h1" component="h1" mr={3}>
          Error
        </Typography>
        <ErrorIcon sx={{ width: '100px', height: 'auto' }} />
      </Box>
      <Button
        sx={{
          marginBottom: '270px',
          marginTop: '100px',
          color: '#7e9392',
          border: '2px solid #7e9392',
          fontWeight: '600',
        }}
        href="/"
      >
        Return to Home Page
      </Button>
    </Box>
  );
};

export default NoPage;
