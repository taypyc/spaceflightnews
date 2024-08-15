import { useFiltered } from '../../hooks';
import {
  addInputValues,
  removeInputValues,
} from '../../redux/actions/inputActions';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
  const { setInputValue, filteredState, inputValue } = useFiltered();

  let input = document.getElementById('search');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(addInputValues(e.target.value));
    if ((e.target.value = '')) {
      dispatch(removeInputValues(''));
    }
  };

  return (
    <Box className={styles.searchbar}>
      <Typography className={styles.searchbar__title}>
        Filter by keywords
      </Typography>
      <Paper className={styles.searchbar__field} component="form">
        <IconButton
          className={styles.searchbar__button}
          id="searchButton"
          type="button"
          sx={{ p: '12px 15px' }}
          aria-label="search"
          onClick={() => input?.focus()}
        >
          <FiSearch />
        </IconButton>
        <InputBase
          className={styles.searchbar__input}
          id="search"
          type="search"
          value={inputValue}
          onChange={handleChange}
        />
      </Paper>
      <Box className={styles.searchbar__results}>
        <Typography className={styles.searchbar__text}>
          Results: {filteredState.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchBar;
