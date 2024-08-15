import { ADD_TO_FILTERED } from '../actionTypes/filteredTypes';
import { AxiosResponse } from 'axios';

export const addToFiltered = (articles: any) => {
  return {
    type: ADD_TO_FILTERED,
    payload: articles,
  };
};
