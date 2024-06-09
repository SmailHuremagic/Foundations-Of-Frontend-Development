import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#f8f8f8', padding: 2, marginTop: 4 }}>
    <Container maxWidth="md">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
