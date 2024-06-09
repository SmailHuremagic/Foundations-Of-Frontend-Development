import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Home = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Welcome to My Blog</Typography>
        <Typography variant="body2">
          Here you'll find insights and articles on various topics.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Home;
