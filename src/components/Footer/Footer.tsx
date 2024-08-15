import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
      className={styles.footer}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container className={styles.footer__box} maxWidth="sm">
          <Box>
            <NavLink className={styles.footer__link} to="/fresh-news">
              <AutoStoriesRoundedIcon className={styles.footer__icon} />
              <Typography className={styles.footer__title}>
                Fresh News
              </Typography>
            </NavLink>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
