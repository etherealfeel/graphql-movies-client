import { renderHook, act } from '@testing-library/react-hooks';
import { useMovies } from '.';
import { MAX_SELECTED_MOVIES } from '../../const';

describe('useMovies hook usage', () => {
  const basicMovie = {
    id: 1,
    title: 'Movie title',
  };

  it('should select movie', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(basicMovie);
    });

    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(basicMovie.id); //best practices: one expect per test
  });

  it('should delete movie', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(basicMovie);
    });

    expect(result.current.selectedMovies.length).toBe(1);

    act(() => {
      result.current.deleteMovie(basicMovie);
    });

    expect(result.current.selectedMovies.length).toBe(0);
  });

  it('should select movie only once', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(basicMovie);
    });

    act(() => {
      result.current.selectMovie(basicMovie);
    });

    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(basicMovie.id);
  });

  it('should add no more than max allowed movies', () => {
    const { result } = renderHook(() => useMovies());
    for (let i = 0; i < MAX_SELECTED_MOVIES; i++) {
      act(() => {
        result.current.selectMovie({
          ...basicMovie,
          id: i,
        });
      });
    }
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);
    act(() => {
      result.current.selectMovie({
        ...basicMovie,
        id: 11,
      });
    });
    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);
  });
});
