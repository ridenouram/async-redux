import { getCharacters } from '../services/getCharacters';

export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchCharacters = () => dispatch => {
  dispatch({
    type: FETCH_LOADING
  });

  return getCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ERROR,
        payload: err
      });
    });
};

