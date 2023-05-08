import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CardMenu from '../CardMenu';
import AddIcon from '@mui/icons-material/Add';
import { FormattedMessage } from 'react-intl';
import { styled } from '@mui/material/styles';

const PlusIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  cursor: 'pointer',
  background: 'rgba(255, 255, 255, .5)',
  '&:hover': {
    opacity: 1,
  },
}));

const MovieCard = ({ movie, onCardSelect, minimized = false }) => {
  return (
    <Card sx={{ maxWidth: 200, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={() => onCardSelect(movie)}>
          <FormattedMessage id="select" />
        </MenuItem>
      </CardMenu>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={movie.image}
          alt={movie.title}
        />
        {!minimized && (
          <PlusIcon onClick={() => onCardSelect(movie)}>
            <AddIcon sx={{ fontSize: 40 }} />
          </PlusIcon>
        )}
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          {/* {movie.title.length >= 15
            ? movie.title.slice(0, 14) + '...'
            : movie.title} */}
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
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
  minimized: PropTypes.bool,
};

export default MovieCard;
