import { Form, Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import {
  SortField,
  SortDirectionField,
  AdultField,
  YearField,
  SubmitField,
  ReleaseYearField,
  GenreField,
} from './components';
import { GENRES_QUERY } from './queries';
import { useQuery } from '@apollo/client';
import { SORT_DIRECTION } from '../../const';
export const FilterForm = ({ onSubmit, initialValues }) => {
  const { loading, error, data } = useQuery(GENRES_QUERY);

  if (loading) {
    return 'Loading ...';
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <YearField />
                </Box>

                <Box mr={3}>
                  <ReleaseYearField />
                </Box>

                <Box mr={3}>
                  <GenreField data={data} />
                </Box>
                <AdultField />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={3}>
                  <SortField />
                </Box>

                <SortDirectionField />
              </Box>
            </Box>
            <Box>
              <SubmitField />
            </Box>
          </form>
        )}
      />
    </div>
  );
};
