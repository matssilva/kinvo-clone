import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import MyProducts from './pages/MyProducts';

const theme = {
  grey: 'rgb(218, 224, 227);',
  purple: 'rgb(93,65,172)',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Navbar />
          <div style={{ height: '100vh', display: 'flex' }}>
            <Sidebar />
            <Routes>
              <Route path="/myProducts" element={<MyProducts />} />
            </Routes>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
