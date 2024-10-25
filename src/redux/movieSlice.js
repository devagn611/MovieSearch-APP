
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (searchTerm) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=e16af382&s=${searchTerm}`);
  return response.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (title) => {
  const response = await axios.get(`https://www.omdbapi.com/?apikey=e16af382&t=${title}`);
  return response.data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    selectedMovie: null,
    status: 'idle',
    error: null
  },
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        if (action.payload.Response === 'True') {
          state.movies = action.payload.Search;
        } else {
          state.error = 'Movie not found';
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
      });
  }
});

export const { selectMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
