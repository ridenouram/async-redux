import { FETCH_LOADING, FETCH_CHARACTERS, FETCH_ERROR } from '../actions/characterActions';

const initialState = {
  loading: false,
  characters: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, loading: false, error: null, characters: action.payload  };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
