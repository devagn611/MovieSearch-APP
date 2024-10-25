import React, { useState, useEffect } from 'react';
import MovieList from './MovieList'; // Ensure you have this component
import Search from './Search'; // Ensure you have this component
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Find() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Suits');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=e16af382&s=${query}`);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  const handleSearch = (input) => {
    if (input) {
      setSearchTerm(input);
    }
  };

  return (
    <>

    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto p-4 max-w-4xl">
      <Link
        to="/"
        className="z-10 self-start mb-10 px-4 py-2 rounded-full bg-white/80 text-black font-semibold shadow-lg hover:bg-white transition duration-200"
      >
        ← Back
      </Link>

        <Search handleSearch={handleSearch} />
    Current Result for : {searchTerm}
        {loading ? (
          <p className="text-center text-gray-500 font-medium">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 font-medium">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieList key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
