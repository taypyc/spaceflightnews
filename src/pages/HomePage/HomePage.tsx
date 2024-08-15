import Container from '@mui/material/Container';
import styles from './HomePage.module.scss';
import { CardList, SearchBar, Clock, GoToTopButton } from '../../components';
const HomePage = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <Clock />
      <SearchBar />
      <CardList />
      <GoToTopButton />
    </Container>
  );
};

export default HomePage;
