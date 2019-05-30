import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterCards = characters.map(character => {
    return (
      <li key={character._id}>
        <Character name={character.name} img={character.photoUrl} />
      </li>);
  });

  return (
    <ul>
      {characterCards}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};
