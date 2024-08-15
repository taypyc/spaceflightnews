import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Box from '@mui/material/Box';
import styles from './CardList.module.scss';
import { iArticleProps, useAxiosGetProps } from '../../interfaces/interfaces';
import { useAxiosGet } from '../../hooks';
import { PostCard } from '../PostCard';
import { PostMinCard } from '../PostMinCard';
import { Loader } from '../Loader';
import { Error } from '../Error';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const CardList: React.FC = () => {
  const { state, isLoading, error }: useAxiosGetProps = useAxiosGet();
  const filteredState = useSelector(
    (state: RootState) => state.filteredReducer,
  );

  const [chrono, setChrono] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('chrono');

    if (value !== null) {
      setChrono(JSON.parse(value));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('chrono', JSON.stringify(chrono));
  }, [chrono]);

  const handleChronoChange = () => {
    setChrono((current) => !current);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (filteredState) {
    return (
      <>
        <Box className={styles.list__button}>
          <FormControl component="fieldset">
            <FormControlLabel
              checked={chrono}
              control={<Switch color="primary" />}
              label="Chrono mode"
              labelPlacement="end"
              onChange={handleChronoChange}
            />
          </FormControl>
        </Box>
        {chrono ? (
          <Box
            gridTemplateColumns={{
              xs: '1fr',
              sm: '1fr',
              md: '1fr',
            }}
            className={styles.list}
          >
            {filteredState.map((post: iArticleProps) => (
              <PostMinCard
                key={post.id}
                id={post.id}
                body={post.summary}
                title={post.title}
                image={post.imageUrl}
                publishedAt={post.publishedAt}
              />
            ))}
          </Box>
        ) : (
          <Box
            gridTemplateColumns={{
              xs: '1fr',
              sm: '1fr',
              md: '1fr 1fr',
              lg: '1fr 1fr 1fr',
            }}
            className={styles.list}
          >
            {filteredState.map((post: iArticleProps) => (
              <PostCard
                key={post.id}
                id={post.id}
                body={post.summary}
                title={post.title}
                image={post.imageUrl}
                publishedAt={post.publishedAt}
              />
            ))}
          </Box>
        )}
      </>
    );
  }

  return (
    <>
      <Box className={styles.list__button}>
        <FormControl component="fieldset">
          <FormControlLabel
            checked={chrono}
            control={<Switch color="primary" />}
            label="Chrono mode"
            labelPlacement="end"
            onChange={handleChronoChange}
          />
        </FormControl>
      </Box>
      {chrono ? (
        <Box
          gridTemplateColumns={{
            xs: '1fr',
            sm: '1fr',
            md: '1fr',
          }}
          className={styles.list}
        >
          {state.map((post: iArticleProps) => (
            <PostMinCard
              key={post.id}
              id={post.id}
              body={post.summary}
              title={post.title}
              image={post.imageUrl}
              publishedAt={post.publishedAt}
            />
          ))}
        </Box>
      ) : (
        <Box
          gridTemplateColumns={{
            xs: '1fr',
            sm: '1fr',
            md: '1fr 1fr',
            lg: '1fr 1fr 1fr',
          }}
          className={styles.list}
        >
          {state.map((post: iArticleProps) => (
            <PostCard
              key={post.id}
              id={post.id}
              body={post.summary}
              title={post.title}
              image={post.imageUrl}
              publishedAt={post.publishedAt}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default CardList;
