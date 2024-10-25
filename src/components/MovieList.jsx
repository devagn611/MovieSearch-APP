import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectMovie } from "../redux/movieSlice";
import "../App.css"

export default function MovieList({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSelectMovie = async () => {
    setLoading(true);
    dispatch(selectMovie(movie));

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movie.Title}&apikey=e16af382`
      );
      const movieDetails = await response.json();

      navigate(`/movie/${movie.imdbID}`, { state: { movie: movieDetails } });
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      onClick={handleSelectMovie}
      className="bg-white text-gray-900 rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
    >
      {loading ? (
        <div className="flex items-center justify-center h-60">
          <div className="loader" />
        </div>
      ) : (
        <>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300"
            }
            alt={movie.Title}
            className="w-full h-60 object-cover mb-4 rounded-lg"
          />
          <h2 className="text-lg font-semibold mb-1">{movie.Title}</h2>
          <p className="text-gray-700">{movie.Year}</p>
        </>
      )}
    </div>
  );
}
