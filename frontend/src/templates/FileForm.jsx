import React, { useContext, useState } from 'react';
import { TextCard, FileInput, Button } from '../components';
import UploadContext from '../context/UploadContext';
import { postRequest } from '../services/APIRequests';


export default function FileForm() {
  const [buttonName, setButtonName] = useState('Enviar');
  const {
    selectedFile,
    setSelectedFile,
    uploads,
    setUploads,
  } = useContext(UploadContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonName('Enviando...');
    setSelectedFile('');

    const formData = new FormData();
    formData.append('file', selectedFile);
    const { data } = await postRequest('/', formData);
    setUploads([...uploads, data]);

    setButtonName('Enviar');
  };

  return (
    <form>
      <TextCard
        className="upload-text"
        text="Selecione um arquivo:"
      />
      <FileInput />
      <Button
        name={ buttonName }
        className="submit-btn"
        type="submit"
        handleClick={ (e) => handleSubmit(e) }
        disabled={!selectedFile}
      />
    </form>
  );
}
