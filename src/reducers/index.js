import { combineReducers } from 'redux';
import { films, loading } from './FilmsReducer';

export default combineReducers({
  films,
  loading
});
