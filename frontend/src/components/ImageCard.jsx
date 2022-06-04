import PropTypes from 'prop-types';
import React from 'react';

export default function ImageCard({ src, title }) {
  return (
    <img
      src={ src }
      alt={ `Imagem de nome: ${title}` }
      className="uploaded-img"
      width="50"
    />
  );
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
