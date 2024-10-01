import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import './App.css'; // Custom styles

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
