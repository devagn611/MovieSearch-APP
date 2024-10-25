import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Import the movie slice

const store = configureStore({
  reducer: {
    movies: movieReducer, // Add the movie slice to the store
  },
});

export default store;
