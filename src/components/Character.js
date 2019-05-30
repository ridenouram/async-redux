import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, img }) {
  return (
    <div>
      <img src={img} />
      <h2>{name}</h2>
    </div>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Character;
