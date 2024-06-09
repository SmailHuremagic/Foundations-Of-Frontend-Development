// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Typography, Box, Card, CardContent, Avatar } from '@mui/material';

const author = {
  name: "John Doe",
  bio: "John is a passionate writer who loves to share insights on various topics through his blogs.",
  avatar: "https://source.unsplash.com/random?avatar"
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from an API
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" paragraph>
        This is the blog page where you can find all articles.
      </Typography>
      <Box mt={5}>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Avatar src={author.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
              <Box>
                <Typography variant="h6">{author.name}</Typography>
                <Typography variant="body2" color="textSecondary">{author.bio}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {posts.map(post => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Blog;
