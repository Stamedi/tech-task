import { NavLink } from 'react-router-dom';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import '../styles/Nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <h3>GET</h3>
        <PhotoSizeSelectActualOutlinedIcon style={{ height: 'auto', width: '75px' }} />
      </div>
      <ul className="pages-container">
        <li>
          <NavLink to="/" className="nav-link" style={({ isActive }) => (isActive ? { color: '#cb9190' } : undefined)}>
            <span>Newest</span> <PhotoSizeSelectActualOutlinedIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mobile-images"
            className="nav-link"
            style={({ isActive }) => (isActive ? { color: '#cb9190' } : undefined)}
          >
            <span>Mobile</span> <PhotoSizeSelectActualOutlinedIcon />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/desktop-images"
            className="nav-link"
            style={({ isActive }) => (isActive ? { color: '#cb9190' } : undefined)}
          >
            <span>Desktop</span> <PhotoSizeSelectActualOutlinedIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
