import { LOCALES } from '../const';

export default {
  [LOCALES.UKRAINIAN]: {
    navigation: {
      home: 'Кінонавігатор',
      settings: 'Налаштування',
    },
    selected_movies: 'Обрані фільми: ',
    no_selected_movies: 'Додайте перший фільм до списку',
    put_the_list_name: 'Вкажіть імʼя списку',
    share_with_friends: 'Поділитися з друзями',
    copied: 'Скопійовано!',
    select: 'Додати',
    delete: 'Видалити',
    filters: {
      sort_by: 'Сортувати по',
      sort_direction: 'Напрямок',
      include_adult: '18+',
      year: 'Рік',
      release_year: 'Рік випуску',
      genre: 'Жанр',
      release_year: 'Рік випуску',
      genre: 'Жанр',
      submit: 'Пошук',
      sort: {
        'popularity': 'Популярність',
        'release_date': 'Дата випуску',
        'revenue': 'Дохід',
        'primary_release_date': 'Першочергова дата релізу',
        'original_title': 'Оригінальна назва',
        'vote_average': 'Середня оцінка',
        'vote_count': 'Кількість оцінок'
      },
      sort_direction_options: {
        asc: 'ASC',
        desc: 'DESC'
      }
    }
  },
};
