import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box, Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <Card sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: '0 6px 10px rgba(0,0,0,0.1)',
            p: 2
          }}>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <Avatar sx={{
                  bgcolor: 'primary.main',
                  width: 60,
                  height: 60
                }}>
                  <HomeIcon fontSize="large" />
                </Avatar>
              </Box>
              <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
                Welcome to My Blog
              </Typography>
              <Typography variant="body1" align="center" sx={{ mt: 1, color: 'text.secondary' }}>
                Here you'll find insights and articles on various topics. Stay tuned and explore the latest updates.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
