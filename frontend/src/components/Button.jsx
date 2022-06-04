import PropTypes from 'prop-types';
import React from 'react';

export default function Button(
  { name, handleClick, className, disabled, type },
) {
  return (
    <button
      type={ type === 'button' ? 'button' : 'submit' }
      name={ name }
      onClick={ handleClick }
      className={ className }
      disabled={ disabled }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
