import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, styled, Drawer, Divider } from '@mui/material';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import MenuIcon from '@mui/icons-material/Menu';
const StyledToolbar = styled(Toolbar)({
  color: '#eeefea',
  padding: '15px',
});
const StyledIconButton = styled(IconButton)({
  color: '#eeefea',
});

const drawerWidth = 240;
const navItems = ['Newest', 'Mobile', 'Desktop'];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant="h6"
        sx={{ my: 2, color: '#eeefea' }}
      >
        GET
        <PhotoSizeSelectActualOutlinedIcon style={{ height: 'auto' }} />
      </Typography>
      <Divider />
      <Box sx={{ display: { display: 'flex', alignItems: 'center', flexDirection: 'column' } }}>
        {navItems.map((item) => (
          <IconButton key={item}>
            <NavLink
              to={item.toLowerCase() === 'newest' ? '/' : `/${item.toLowerCase()}`}
              style={({ isActive }) => (isActive ? { color: '#cb9190' } : { color: '#eeefea' })}
            >
              <Typography pr={1}>{item}</Typography> <PhotoSizeSelectActualOutlinedIcon />
            </NavLink>
          </IconButton>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" sx={{ background: '#574c4e', display: 'flex' }} component="nav">
        <StyledToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}
          >
            GET
            <PhotoSizeSelectActualOutlinedIcon style={{ height: 'auto', width: '50px' }} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems: 'center' } }}>
            {navItems.map((item) => (
              <StyledIconButton key={item}>
                <NavLink
                  to={item.toLowerCase() === 'newest' ? '/' : `/${item.toLowerCase()}`}
                  className="nav-link"
                  style={({ isActive }) => (isActive ? { color: '#cb9190' } : { color: '#eeefea' })}
                >
                  <Typography pr={1}>{item}</Typography> <PhotoSizeSelectActualOutlinedIcon />
                </NavLink>
              </StyledIconButton>
            ))}
          </Box>
        </StyledToolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: '#574c4e' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;

{
  /* <nav>
        <div className="logo-container">
          <h3>GET</h3>
          <PhotoSizeSelectActualOutlinedIcon style={{ height: 'auto', width: '75px' }} />
        </div>
        <ul className="pages-container">
          <li>
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => (isActive ? { color: '#cb9190' } : undefined)}
            >
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
      </nav> */
}
