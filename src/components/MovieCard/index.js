import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import CardMenu from '../CardMenu';

const MovieCard = ({movie, onCardSelect}) => {
  return (
    <Card sx={{ maxWidth: 200, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string
  }).isRequired,
  onCardSelect: PropTypes.func
  
}

export default MovieCard;
