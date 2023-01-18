import React from 'react';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <h3>GET</h3>
        <PhotoSizeSelectActualOutlinedIcon />
      </div>
      <div className="pages-container">
        <h3>
          Newest <PhotoSizeSelectActualOutlinedIcon />
        </h3>
        <h3>
          Mobile <PhotoSizeSelectActualOutlinedIcon />
        </h3>
        <h3>
          Desktop <PhotoSizeSelectActualOutlinedIcon />
        </h3>
      </div>
    </nav>
  );
};

export default Nav;
