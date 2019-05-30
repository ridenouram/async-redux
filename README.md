##Setup/Presentational Components
* Create your App component
* Create your presentational components
  - Character
  - Characters
* create a service to get characters from https://last-airbender-api.herokuapp.com/api/v1/characters

##Implement Redux
* create actions to fetch characters
* create a combine reducer
* create a store with middleware
  - use the redux-thunk middleware
* create selectors to get character state
  - getCharacters
  - getCharactersLoading
  - getCharactersError
* create AllCharacters container
  - pass it your characters and loading state
  - pass it a function that will fetch from the avatar API and update state
