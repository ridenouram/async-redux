import { fetchCharacters, FETCH_LOADING, FETCH_CHARACTERS } from './characterActions';

jest.mock('../services/getCharacters.js', () => ({
  getCharacters: () => Promise.resolve([])
}));

describe('character actions', () => {
  it('dispatches the actions', () => {
    const thunk = fetchCharacters();
    const dispatch = jest.fn();

    return thunk(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_CHARACTERS,
          payload: []
        });
      });
  });
});
