import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import styles from './Error.module.scss';

const Error: React.FC = () => {
  return (
    <Container className={styles.container} maxWidth="xl">
      <Stack className={styles.container__stack} spacing={2}>
        <Alert variant="filled" severity="error">
          There was an error loading data!
        </Alert>
      </Stack>
      <Button
        onClick={() => window.location.reload()}
        className={styles.container__button}
      >
        <ReplayIcon className={styles.container__buttonicon} /> Reload page
      </Button>
    </Container>
  );
};

export default Error;
