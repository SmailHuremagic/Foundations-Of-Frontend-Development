import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import News from './components/News';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword'; // Ensure this path is correct
import PrivateRoute from './PrivateRoute';
import { ThemeContextProvider, ColorModeContext } from './ThemeContext';
import { AuthProvider } from './AuthContext';
import { Button, Container } from '@mui/material';

const ColorModeButton = () => {
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  return (
    <Button onClick={toggleColorMode} variant="contained" style={{ margin: '10px 0' }}>
      {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </Button>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Router>
          <Header />
          <Container component="main" style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
            <ColorModeButton />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
              <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
              <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
              <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
              <Route path="/weather" element={<PrivateRoute><Weather /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            </Routes>
          </Container>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
