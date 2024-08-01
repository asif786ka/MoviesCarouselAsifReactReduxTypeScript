import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesCarousel from './components/MoviesCarousel';
import Settings from './components/Settings';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MoviesCarousel />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
