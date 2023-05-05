import {useState} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MovieCardSelected, SelectedMoviesForm, ConfirmModal} from '../../components'
import noMoviesImageSrc from '../../assets/no_movies.png';

const SelectedMovies = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '60vh',
    position: 'sticky',
    top: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  }));

const MoviesList = styled(Stack)(({theme}) => ({
    overflowY: 'scroll',
    height: '100%'
}))

const NoMovies = styled(Box)(({theme}) => ({
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}))


const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
    const [listName, setListName] = useState('');
    const [url, setUrl] = useState('')
    const onSubmit = ({listName}) => {
        const ids = selectedMovies.map(({id}) => id);
        const url = `${window.location.host}/recommend?title=${listName}&ids=${ids.join()}`;

        setListName(listName);
        setUrl(url);
    }

    const onCloseConfirmModal = () => {
        setUrl('');
    }

    if (!selectedMovies.length) {
        return (
            <SelectedMovies>
                <NoMovies>
                <Box
                    component="img"
                    sx={{
                        width: '50%',
                        opacity: '.6'
                    }}
                    alt="No images."
                    src={noMoviesImageSrc}
                />
                <Typography variant="h5" mt={2}>
                    No movies yet!
                </Typography>
                </NoMovies>
            </SelectedMovies>
        )
    }

    return (
        <SelectedMovies>
            <MoviesList spacing={2}>
                {selectedMovies.map((movie) => (
                    <MovieCardSelected key={movie.id}
                        movie={movie}
                        onCardDelete={deleteMovie}/>
                ))}
            </MoviesList>
            <Box pt={2}>
                <SelectedMoviesForm onSubmit={onSubmit}/>
            </Box>
            <ConfirmModal url={url} title={listName} open={!!url} onClose={onCloseConfirmModal}/>
        </SelectedMovies>
    )
};

export default SelectedMoviesSection;