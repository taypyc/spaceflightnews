import postsReducer from './postsReducer';
import filteredReducer from './filteredReducer';
import inputReducer from './inputReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  postsReducer,
  filteredReducer,
  inputReducer,
});

export default rootReducer;
