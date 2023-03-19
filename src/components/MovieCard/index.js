import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CardMenu from '../CardMenu';

const MovieCard = ({onCardSelect}) => {
  return (
    <Card sx={{ maxWidth: 200, position: 'relative' }}>
      <CardMenu>
        <MenuItem onClick={onCardSelect}>Select</MenuItem>
      </CardMenu>
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/bPVqWiVxjXDzJOfvwGVyDOUydH5.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          Boston Strangler
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Apr 08, 2022
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
