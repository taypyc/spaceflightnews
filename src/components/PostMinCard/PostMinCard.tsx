import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import styles from './PostMinCard.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import Highlighter from 'react-highlight-words';
import { iCardProps } from '../../interfaces/interfaces';
import { getTime } from '../../helpers';

const PostMinCard: React.FC<iCardProps> = ({
  id,
  title,
  publishedAt,
  image,
}) => {
  const inputValues = useSelector((state: RootState) => state.inputReducer);

  return (
    <NavLink className={styles.card__navlink} to={`/fresh-news/article/${id}`}>
      <CardMedia image={image} className={styles.card} sx={{ p: 0, m: 0 }}>
        <Typography className={styles.card__datebox}>
          {getTime(publishedAt)}
        </Typography>
        <Box className={styles.card__titlebox}>
          <Typography className={styles.card__title}>
            <Highlighter
              searchWords={inputValues}
              textToHighlight={title}
              autoEscape={true}
            />
          </Typography>
        </Box>
      </CardMedia>
    </NavLink>
  );
};

export default PostMinCard;
