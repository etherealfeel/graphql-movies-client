import { useState, useCallback } from 'react';
import {MAX_SELECTED_MOVIES} from '../../const';


export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback(
    (movie) => {
      const moviesCount = selectedMovies.length;
      const movieExists = selectedMovies.find(({ id }) => id === movie.id);
      if (movieExists) return;
      if (moviesCount < MAX_SELECTED_MOVIES)
        setSelectedMovies([movie, ...selectedMovies]);
    },
    [selectedMovies],
  );

  const deleteMovie = useCallback(
    (movie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => movie.id !== id));
    },
    [selectedMovies],
  );

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
