import PropTypes from 'prop-types';
import React from 'react';

export default function TextCard({ text, className }) {
  return (
    <div className="text-card">
      <p className={ className }>
        { text }
      </p>
    </div>
  );
}

TextCard.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
