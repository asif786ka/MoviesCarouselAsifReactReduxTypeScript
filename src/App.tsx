import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesCarousel from './components/MoviesCarousel';
import Settings from './components/Settings';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MoviesCarousel />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
