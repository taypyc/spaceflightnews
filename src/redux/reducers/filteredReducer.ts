import { ADD_TO_FILTERED } from '../actionTypes/filteredTypes';
import { iArticleProps } from '../../interfaces/interfaces';

const postsList: iArticleProps[] = [];

const postsReducer = (state = postsList, action: any) => {
  switch (action.type) {
    case ADD_TO_FILTERED: {
      const data = action.payload;

      return [...data];
    }
    default: {
      return state;
    }
  }
};

export default postsReducer;
