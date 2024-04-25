import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

function Contact() {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactInfo);  // In a real app, you'd handle submission here
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" name="name" value={contactInfo.name} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Email" name="email" type="email" value={contactInfo.email} onChange={handleChange} fullWidth margin="normal" />
        <TextField label="Message" name="message" multiline rows={4} value={contactInfo.message} onChange={handleChange} fullWidth margin="normal" />
        <Button type="submit" color="primary" variant="contained">Send</Button>
      </form>
    </Container>
  );
}

export default Contact;
