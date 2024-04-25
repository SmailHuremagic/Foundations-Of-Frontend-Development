import React from 'react';
import { Typography, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Welcome to My SPA</Typography>
      <Typography>This is the home page of our single-page application showcasing a portfolio, blog, or a simple e-commerce site.</Typography>
    </Container>
  );
}

export default Home;
