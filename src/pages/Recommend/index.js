import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { MOVIES_BY_IDS_QUERY } from './queries';
import Grid from '@mui/material/Grid';
import { MovieCard } from '../../components';

const Recommend = () => {
  const [searchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get('ids')
        ?.split(',')
        .map((id) => +id)
    },
  });

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error happened.</div>;
  }

  return (
    <>
      <Typography variant="h5" component="div" gutterBottom>
        {searchParams.get('title')}
      </Typography>
      {data?.moviesByIds && (
        <Grid container spacing={2}>
          {data.moviesByIds.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard movie={movie} onCardSelect={() => {}} minimized/>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Recommend;
