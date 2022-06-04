import React, { useContext } from 'react';
import UploadContext from '../context/UploadContext';

export default function FileInput() {
  const { setSelectedFile } = useContext(UploadContext);

  return (
    <input
      accept="image/*"
      type="file"
      onChange={ ({ target: { files } }) => setSelectedFile(files[0]) }
    />
  );
}
