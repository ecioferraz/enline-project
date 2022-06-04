import PropTypes from 'prop-types';
import React, { useState } from 'react';
import UploadContext from '../context/UploadContext';

export default function UploadProvider({ children }) {
  const [selectedFile, setSelectedFile] = useState('');

  const context = {
    selectedFile,
    setSelectedFile,
  };

  return (
    <UploadContext.Provider value={ context }>
      { children }
    </UploadContext.Provider>
  );
}

UploadProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
