import axios from 'axios';

export const FETCH_FILMS = 'FETCH_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export const receiveFilms = (films) => {
  return {
    type: RECEIVE_FILMS,
    films,
    loading: false,
  };
}

export const fetchFilms = () => {
  return {
    type: FETCH_FILMS,
    loading: true,
  }
}

export const fetchFilmsRequest = () => {
  return dispatch => {
    dispatch(fetchFilms());
    return axios.get('https://www.snagfilms.com/apis/films.json?limit=10')
      .then(response => {
        dispatch(receiveFilms(response.data.films.film))
      })
  }
}

export default fetchFilmsRequest;
