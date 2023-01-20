import React from 'react';
import '../styles/Footer.scss';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <footer>
      <YouTubeIcon style={{ width: '100px', height: 'auto' }} />
      <InstagramIcon style={{ width: '100px', height: 'auto' }} />
      <FacebookIcon style={{ width: '100px', height: 'auto' }} />
    </footer>
  );
};

export default Footer;
