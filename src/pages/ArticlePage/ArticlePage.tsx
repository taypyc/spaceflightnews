import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/store/store';
import { GoToTopButton } from '../../components';
import styles from './ArticlePage.module.scss';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { iArticleProps } from '../../interfaces/interfaces';
import ExampleText from './ExampleText';

const ArticlePage = () => {
  const state = useSelector((state: RootState) => state.postsReducer);

  const { id } = useParams();

  const [article, setArticle] = useState<any>(state);

  useEffect(() => {
    const filteredArticle = state.find(
      (article: iArticleProps) => article.id === Number(id),
    );
    setArticle(filteredArticle);
  }, [id, state]);

  return (
    <Container className={styles.container} maxWidth={'xxl'}>
      <Box
        className={styles.article__image}
        style={{
          backgroundImage: `url(${article?.imageUrl})`,
        }}
      ></Box>
      <Box className={styles.article__inner}>
        <Box className={styles.article__bodybox}>
          <Typography className={styles.article__title}>
            {article?.title}
          </Typography>
          <Typography className={styles.article__text}>
            {article.summary}
          </Typography>
          <ExampleText />
        </Box>
        <NavLink className={styles.article__navlink} to={`/fresh-news`}>
          <Button className={styles.article__button}>
            <ArrowBackIcon className={styles.article__buttonicon} /> Back to
            homepage
          </Button>
        </NavLink>
      </Box>
      <GoToTopButton />
    </Container>
  );
};

export default ArticlePage;
