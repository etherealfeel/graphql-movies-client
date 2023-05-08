import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MovieCard, SelectedMoviesSection } from '../../components';
import { useQuery } from '@apollo/client';
import { MOVIES_QUERY } from './queries';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useMovies } from '../../hooks/useMovies';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { FilterForm } from '../../components/FilterForm';
import { useFilters } from './../../hooks/useFilters';

const Home = () => {
  const { filter, setPage, setFilter } = useFilters();
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  if (error) {
    return 'Error';
  }

  const onSubmit = (data) => {
    console.log(data);
    setFilter(data);
  };

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ padding: '16px' }}>
            <FilterForm onSubmit={onSubmit} initialValues={filter} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 4 }}>
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
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            marginTop: 2,
          }}
        >
          <Typography variant="h5" gutterBottom component="div">
            <FormattedMessage id="selected_movies" />
          </Typography>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
      <Stack spacing={2}>
        <Pagination
          sx={{ padding: 2, margin: '0 auto' }}
          count={500}
          color="secondary"
          size="large"
          page={filter.page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default Home;
