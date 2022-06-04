import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Button, ImageCard, TextCard } from '../components';
import { formatBytes } from '../services/formatBytes';
import { deleteRequest } from '../services/APIRequests';
import UploadContext from '../context/UploadContext';

export default function UploadCard({ id, url, name, size }) {
  const [buttonName, setButtonName] = useState('Excluir');
  const { setUploads } = useContext(UploadContext);

  const removeUpload = async () => {
    setButtonName('Excluindo...');
    await deleteRequest(`/${id}`);
    setUploads((prevState) => prevState.filter((upload) => upload._id !== id));
    setButtonName('Excluir');
  };

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
        name={ buttonName }
        handleClick={ removeUpload }
        className="remove-btn"
        disabled={ buttonName === 'Excluindo...' }
      />
    </div>
  );
}

UploadCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};
