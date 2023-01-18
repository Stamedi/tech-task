import React from 'react';
import { Link } from 'react-router-dom';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <h3>GET</h3>
        <PhotoSizeSelectActualOutlinedIcon style={{ height: 'auto', width: '4logo-container0px' }} />
      </div>
      <ul className="pages-container">
        <li>
          <Link to="/" className="nav-link">
            <span>Newest</span> <PhotoSizeSelectActualOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link to="/mobile-images" className="nav-link">
            <span>Mobile</span> <PhotoSizeSelectActualOutlinedIcon />
          </Link>
        </li>
        <li>
          <Link to="/desktop-images" className="nav-link">
            <span>Desktop</span> <PhotoSizeSelectActualOutlinedIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
