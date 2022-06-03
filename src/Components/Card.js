import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ name, id, }) => {
  return <div>
    <h2>{name}</h2>
  </div>
}

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

Card.defaultProps = {
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Card