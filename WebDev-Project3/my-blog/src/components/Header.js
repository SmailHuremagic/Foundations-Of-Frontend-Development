import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ColorModeContext } from '../ThemeContext';
import { useAuth } from '../AuthContext'; // Ensure correct path

const Header = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const { isAuthenticated } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/news">News</Button>
          <Button color="inherit" component={Link} to="/weather">Weather</Button>
          {isAuthenticated && (
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
          )}
          <Button onClick={toggleColorMode} color="inherit">
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
