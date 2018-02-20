import { RECEIVE_FILMS, FETCH_FILMS } from '../actions/index';

export const films = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FILMS:
      return [...state, action.films ];
    default:
      return state;
  }
}

export const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_FILMS:
      return true;
    case RECEIVE_FILMS:
      return false;
    default:
      return state;
  }
}
