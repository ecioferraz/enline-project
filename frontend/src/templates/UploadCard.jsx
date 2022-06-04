import PropTypes from 'prop-types';
import React from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { formatBytes } from '../services/formatBytes';

export default function UploadCard({ url, name, size }) {
  return (
    <div>
      <ImageCard
        src={ url }
        title={ name }
      />
      <TextCard
        text={ name }
        className="upload-name"
      />
      <TextCard
        text={ formatBytes(size) }
        className="upload-size"
      />
      <Button
        name="Excluir"
        handleClick={ () => {} }
        className="remove-btn"
      />
    </div>
  );
}

UploadCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};
