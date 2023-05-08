import { LOCALES } from '../const';

export default {
  [LOCALES.ENGLISH]: {
    navigation: {
      home: 'Movie Navigator',
      settings: 'Settings'
    },
    selected_movies: 'Selected movies: ',
    no_selected_movies: 'No selected movies yet',
    put_the_list_name: 'Give a name to your list',
    share_with_friends: 'Share with friends',
    copied: 'Copied!',
    select: 'Select',
    delete: 'Delete',
    filters: {
      sort_by: 'Sort by',
      sort_direction: 'Sort direction',
      include_adult: 'Adult',
      year: 'Year',
      release_year: 'Release year',
      genre: 'Genre',
      submit: 'Submit',
      sort: {
        'popularity': 'Popularity',
        'release_date': 'Release date',
        'revenue': 'Revenue',
        'primary_release_date': 'Primary release date',
        'original_title': 'Original title',
        'vote_average': 'Vote average',
        'vote_count': 'Vote count'
      },
      sort_direction_options: {
        asc: 'ASC',
        desc: 'DESC'
      }
    }
  }
};