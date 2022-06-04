import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import UploadContext from '../context/UploadContext';
import { getRequest } from '../services/APIRequests';

export default function UploadProvider({ children }) {
  const [selectedFile, setSelectedFile] = useState('');
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const getUploads = async () => {
      const { data } = await getRequest('/');
      setUploads(data);
    };

    getUploads();
  }, []);

  const context = {
    selectedFile,
    setSelectedFile,
    uploads,
    setUploads,
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
