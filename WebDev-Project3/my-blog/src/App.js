import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import { ThemeContextProvider, ColorModeContext } from './ThemeContext';
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
      <Router>
        <Header />
        <Container component="main" style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>
          <ColorModeButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
