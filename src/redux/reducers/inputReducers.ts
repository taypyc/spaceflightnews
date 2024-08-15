import {
  ADD_INPUT_VALUES,
  REMOVE_INPUT_VALUES,
} from '../actionTypes/inputTypes';

const postsList: string[] = [];

const inputReducer = (state = postsList, action: any) => {
  switch (action.type) {
    case ADD_INPUT_VALUES: {
      const data = action.payload;

      return [`${data}`];
    }
    case REMOVE_INPUT_VALUES: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default inputReducer;
