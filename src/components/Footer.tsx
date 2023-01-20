import React from 'react';
import '../styles/Footer.scss';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <footer>
      <a href="https://www.youtube.com/">
        <YouTubeIcon style={{ width: '100px', height: 'auto' }} />
      </a>
      <a href="https://www.instagram.com/">
        <InstagramIcon style={{ width: '100px', height: 'auto' }} />
      </a>
      <a href="https://www.facebook.com/">
        <FacebookIcon style={{ width: '100px', height: 'auto' }} />
      </a>
    </footer>
  );
};

export default Footer;
