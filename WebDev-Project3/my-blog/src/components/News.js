import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, Box, TextField } from '@mui/material';

const News = () => {
    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState('us'); // Default country in lowercase

    useEffect(() => {
        const apiKey = '45b6db13dbfa4cf9951f5e67bb050c64'; // Your News API key
        const url = `https://newsapi.org/v2/top-headlines?country=${country.toLowerCase()}&apiKey=${apiKey}`;

        axios.get(url)
            .then(response => {
                setArticles(response.data.articles);
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });
    }, [country]); // Dependency array includes country to refetch when it changes

    const handleCountryChange = event => {
        setCountry(event.target.value.toLowerCase()); // Convert input to lowercase immediately
    };

    const handleSubmit = event => {
        event.preventDefault(); // Prevent default form submission behavior
        // No need to call setCountry here as it's handled by onChange
    };

    return (
        <Box sx={{ maxWidth: 800, m: 'auto', p: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
                Latest News
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Enter Country Code (e.g., us )"
                    variant="outlined"
                    value={country}
                    onChange={handleCountryChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Fetch News
                </Button>
            </form>
            {articles.map((article, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                    <CardActionArea href={article.url} target="_blank">
                        {article.urlToImage && (
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.urlToImage}
                                alt={article.title}
                            />
                        )}
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {article.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
};

export default News;
