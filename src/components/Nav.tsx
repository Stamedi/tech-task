import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, styled, Drawer, Divider, alpha, InputBase } from '@mui/material';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../App';

const StyledToolbar = styled(Toolbar)({
  color: '#eeefea',
  padding: '15px',
});

const StyledIconButton = styled(IconButton)({
  color: '#eeefea',
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '30ch',
    },
  },
}));

const drawerWidth = 240;
const navItems = ['Newest', 'Mobile', 'Desktop'];

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState('');
  const context = useContext(AppContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const { handleSearchVal } = context;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 7, color: '#eeefea' }}
      >
        <Typography position="absolute" variant="h6" mb={2.5}>
          GET
        </Typography>
        <PhotoSizeSelectActualOutlinedIcon style={{ width: '70px', height: 'auto', position: 'absolute' }} />
      </Box>
      <Divider />
      <Box sx={{ display: { display: 'flex', alignItems: 'center', flexDirection: 'column' } }}>
        {navItems.map((item) => (
          <IconButton key={item}>
            <NavLink
              to={item.toLowerCase() === 'newest' ? '/' : `/${item.toLowerCase()}`}
              className="nav-link"
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
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
            <Typography position="absolute" variant="h6" mb={2.7} ml={2.9}>
              GET
            </Typography>
            <PhotoSizeSelectActualOutlinedIcon
              style={{
                height: 'auto',
                width: '85px',
                position: 'absolute',
              }}
            />
          </Box>
          <form noValidate onSubmit={(event) => handleSearchVal(inputVal, event)}>
            <Search>
              <StyledInputBase
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton sx={{ px: 2, py: 2, mr: { md: 1 } }} type="submit">
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              </IconButton>
            </Search>
          </form>
          <Box sx={{ display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
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
            display: { sm: 'block', md: 'none' },
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
