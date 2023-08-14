import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/Header";
import AboutTheStore from "./components/AboutTheStore";
import AboutStrider from './components/AboutStrider';
import Customer from "./components/Customer";
import Item from "./components/Item";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Container style={{ height: "100vh", position: "relative" }} >
          <Header />
          <Routes>
            <Route
              path="/"
              element={<AboutTheStore />}
            />
            <Route
              path="/AboutStrider"
              element={<AboutStrider />}
            />            
            <Route
              path="/customer/:id"
              element={<Customer />}
              />
            <Route
              path="/item/:item"
              element={<Item />}
              />              
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
