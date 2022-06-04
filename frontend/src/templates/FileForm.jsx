import React, { useContext } from 'react';
import Button from '../components/Button';
import FileInput from '../components/FileInput';
import TextCard from '../components/TextCard';
import UploadContext from '../context/UploadContext';
import { postRequest } from '../services/APIRequests';

export default function FileForm() {
  const { selectedFile, setSelectedFile } = useContext(UploadContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    postRequest('/', formData);
    setSelectedFile('');
  };

  return (
    <form>
      <TextCard
        className="upload-text"
        text="Selecione um arquivo:"
      />
      <FileInput />
      <Button
        name="Enviar"
        className="submit-btn"
        type="submit"
        handleClick={ (e) => handleSubmit(e) }
        disabled={!selectedFile}
      />
    </form>
  );
}
