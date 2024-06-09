// src/pages/Contact.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "This field is required.";
    tempErrors.email = email ? "" : "This field is required.";
    tempErrors.message = message ? "" : "This field is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, email, message });
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>Contact Us</Typography>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          {...(errors.name && { error: true, helperText: errors.name })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          {...(errors.email && { error: true, helperText: errors.email })}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="message"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          {...(errors.message && { error: true, helperText: errors.message })}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
