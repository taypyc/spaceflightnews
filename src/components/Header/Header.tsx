import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <NavLink className={styles.header__link} to="/fresh-news">
            <AutoStoriesRoundedIcon className={styles.header__icon} />
            <Typography className={styles.header__title}>Fresh News</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
