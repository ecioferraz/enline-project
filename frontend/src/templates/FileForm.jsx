import React, { useContext } from 'react';
import Button from '../components/Button';
import FileInput from '../components/FileInput';
import TextCard from '../components/TextCard';
import UploadContext from '../context/UploadContext';

export default function FileForm() {
  const { selectedFile } = useContext(UploadContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedFile);
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
      />
    </form>
  );
}
