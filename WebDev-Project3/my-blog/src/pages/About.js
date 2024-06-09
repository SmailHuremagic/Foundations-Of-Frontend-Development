import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our blog! We are passionate about sharing knowledge and insights on various topics.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to provide valuable content that inspires, educates, and entertains our readers. Whether you are here for the latest updates, in-depth articles, or simple tips and tricks, we've got something for everyone.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for visiting our site. We hope you enjoy our content and find it useful. Feel free to contact us if you have any questions or suggestions!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
