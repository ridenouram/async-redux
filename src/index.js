import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

function reducer(state = {}, action) {
  switch(action.type) {
    case 'TESTING':
      return 'testing';
    default: 
      return state;
  }
}

const logger = store => next => action => {
  console.log('Before reducer', store.getState());
  next(action);
  console.log('After Reducer', store.getState());
};

const store = createStore(
  reducer,
  compose (
    applyMiddleware(
      logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


store.dispatch({
  type: 'TESTING'
});


