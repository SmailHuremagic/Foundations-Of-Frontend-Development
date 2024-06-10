import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Card, CardContent } from '@mui/material';

const Weather = () => {
    const [location, setLocation] = useState('London'); // Default location
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!location) return; // Prevent fetching if no location is set

        const apiKey = '9161b57bfeed4185adb83232241006';  // Your WeatherAPI key
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

        axios.get(url)
            .then(response => {
                setWeather(response.data);
                setError(''); // Clear any errors
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setError('Failed to fetch weather data');
            });
    }, [location]); // Dependency array includes location to refetch when it changes

    const handleLocationChange = event => {
        setLocation(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault(); // Prevent form submission from reloading the page
    };

    return (
        <Box sx={{ maxWidth: 400, m: "auto", p: 2, boxShadow: 3 }}>
            <Typography variant="h5" gutterBottom>
                Check the Weather
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Enter City"
                    variant="outlined"
                    value={location}
                    onChange={handleLocationChange}
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Get Weather
                </Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            {weather && (
                <Card raised sx={{ mt: 2 }}>
                    <CardContent>
                        <Typography variant="h6">Weather in {weather.location.name}</Typography>
                        <Typography>Temperature: {weather.current.temp_c} °C</Typography>
                        <Typography>Condition: {weather.current.condition.text}</Typography>
                        <img src={weather.current.condition.icon} alt="Weather Icon" />
                        <Typography>Wind: {weather.current.wind_kph} kph</Typography>
                        <Typography>Humidity: {weather.current.humidity}%</Typography>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default Weather;
