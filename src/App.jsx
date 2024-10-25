import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';  // Import MovieDetail component
import Search from './components/Search';
import Find from './components/Find';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Find />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<MovieDetail />} /> {/* Dynamic route for movie details */}
      </Routes>
    </Router>
  );
}

export default App;
