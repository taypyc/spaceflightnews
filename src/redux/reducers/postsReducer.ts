import { ADD_TO_POSTS, ADD_TO_POSTS_FAILTURE } from '../actionTypes/postsTypes';
import { iArticleProps } from '../../interfaces/interfaces';

const postsList: iArticleProps[] = [];

const postsReducer = (state = postsList, action: any) => {
  switch (action.type) {
    case ADD_TO_POSTS: {
      const data = action.payload;

      return [...data];
    }
    case ADD_TO_POSTS_FAILTURE: {
      const error = action.payload;

      return [...error];
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
