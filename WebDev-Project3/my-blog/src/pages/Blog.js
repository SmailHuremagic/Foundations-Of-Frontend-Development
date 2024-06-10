import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Grid, Avatar, CardActionArea, CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';  // You need to install this package

const author = {
  name: "John Doe",
  bio: "John is a passionate writer who loves to share insights on various topics through his blogs.",
  avatar: "https://source.unsplash.com/random?avatar"
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPosts(); // Initial fetch
  }, []);

  const fetchPosts = () => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(prevPosts => [...prevPosts, ...data]);
        setHasMore(data.length > 0); // Assume more data if any was returned
      });
  };

  return (
    <Box sx={{ flexGrow: 1, mx: 3 }}>
      <Typography variant="h2" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" paragraph>
        Explore a world of articles.
      </Typography>
      <Box mt={2} display="flex" alignItems="center">
        <Avatar src={author.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
        <Typography variant="h6">{author.name}</Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
        {author.bio}
      </Typography>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchPosts}
        hasMore={hasMore}
        loader={<CircularProgress />}
        endMessage={<Typography>No more posts to show.</Typography>}
      >
        <Grid container spacing={4}>
          {posts.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                <CardActionArea sx={{ flexGrow: 1 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.image || "https://source.unsplash.com/random"}
                    alt={post.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.summary || 'No summary available.'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Blog;
