import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <LinearProgress />
    </Container>
  );
};

export default Loader;
