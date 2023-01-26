import React from 'react';
import '../styles/Footer.scss';
import { BottomNavigation, styled, IconButton, Box } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const StyledFooter = styled(Box)({
  background: '#574c4e',
  marginTop: '70px',
  display: 'flex',
  justifyContent: 'space-evenly',
  bottom: 0,
  width: '100%',
});

const Footer = () => {
  return (
    <StyledFooter>
      <IconButton
        href="https://www.youtube.com/"
        sx={{
          color: '#eeefea',
          maxWidth: '100px',
          transition: '0.3s',
          '&:hover': {
            color: '#c9c3c3',
          },
        }}
      >
        <YouTubeIcon style={{ width: '100%', height: 'auto' }} />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/"
        sx={{
          color: '#eeefea',
          maxWidth: '100px',
          transition: '0.3s',
          '&:hover': {
            color: '#c9c3c3',
          },
        }}
      >
        <InstagramIcon style={{ width: '100%', height: 'auto' }} />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/"
        sx={{
          color: '#eeefea',
          transition: '0.3s',
          maxWidth: '100px',
          '&:hover': {
            color: '#c9c3c3',
          },
        }}
      >
        <FacebookIcon style={{ width: '100%', height: 'auto' }} />
      </IconButton>
    </StyledFooter>
  );
};

export default Footer;
