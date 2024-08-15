import styles from './NotFound.module.scss';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <Alert variant="filled" severity="error">
        Error 404. Not found.
      </Alert>
      <NavLink className={styles.container__navlink} to={`/fresh-news`}>
        <Button className={styles.container__button}>
          <ArrowBackIcon className={styles.container__buttonicon} /> Back to
          homepage
        </Button>
      </NavLink>
    </Container>
  );
};

export default NotFound;
