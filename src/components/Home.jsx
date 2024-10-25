import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import Navbar from './Navbar';
import Search from './Search';
import Footer from './Footer';

export default function Home() {
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
    if (input) setSearchTerm(input);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto p-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-center mt-5 mb-8 text-gray-800">
            Movie Search
          </h1>

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
      <Footer />
    </>
  );
}
