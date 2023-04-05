import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MovieCard, MovieCardSelected } from '../../components';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMovies } from '../../hooks/useMovies';

const Home = () => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  if (error) {
    return 'Error';
  }

  const handleChange = (e, p) => {
    setPage(p);
  };

  const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 140px)',
    position: 'sticky',
    top: theme.spacing(2),
  }));

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters</Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              {loading && 'Loading...'}
              {data && (
                <Grid container spacing={2}>
                  {data.movies.results.map((movie) => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                      <MovieCard movie={movie} onCardSelect={selectMovie} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>
            {selectedMovies.map((movie) => (
              <MovieCardSelected
                key={movie.id}
                movie={movie}
                onCardDelete={deleteMovie}
              />
            ))}
          </SelectedMovies>
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <Pagination
          sx={{ padding: 2, margin: '0 auto' }}
          count={data?.movies?.totalPages}
          color="secondary"
          size="large"
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default Home;
