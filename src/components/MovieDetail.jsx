import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MovieDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState(location.state?.movie || null);
  const [loading, setLoading] = useState(!movie);

  useEffect(() => {
    if (!movie) {
      const fetchMovie = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `https://www.omdbapi.com/?apikey=e16af382&t=${id}`
          );
          setMovie(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setLoading(false);
        }
      };
      fetchMovie();
    }
  }, [id, movie]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://path-to-your-background-image.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="z-10 self-start mb-6 px-4 py-2 rounded-full bg-white/80 text-black font-semibold shadow-lg hover:bg-white transition duration-200"
      >
        ← Back
      </button>

      {/* Content */}
      {loading ? (
        <div className="z-10 flex items-center justify-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
          <p className="ml-4 text-lg">Loading movie details...</p>
        </div>
      ) : (
        <div className="z-10 max-w-4xl w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            {movie.Title}
          </h1>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
            alt={movie.Title}
            className="w-full h-auto max-w-md mx-auto object-cover mb-6 rounded-lg shadow-md"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Rated:</strong> {movie.Rated}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Writer:</strong> {movie.Writer}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p className="col-span-2"><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>
            <p><strong>Awards:</strong> {movie.Awards}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          </div>
        </div>
      )}
    </div>
  );
}
