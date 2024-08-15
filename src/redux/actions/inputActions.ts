import {
  ADD_INPUT_VALUES,
  REMOVE_INPUT_VALUES,
} from '../actionTypes/inputTypes';

export const addInputValues = (data: string) => {
  return {
    type: ADD_INPUT_VALUES,
    payload: data,
  };
};

export const removeInputValues = (error: string) => {
  return {
    type: REMOVE_INPUT_VALUES,
    payload: '',
  };
};
