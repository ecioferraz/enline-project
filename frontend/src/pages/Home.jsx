import React, { useContext } from 'react';
import UploadContext from '../context/UploadContext';
import FileForm from '../templates/FileForm';
import UploadCard from '../templates/UploadCard';

export default function Home() {
  const { uploads } = useContext(UploadContext);

  return (
    <main>
      <FileForm />
      <section>
        {
          uploads.map(({ _id: id, name, size, url }) => (
            <UploadCard
              key={ id }
              id={ id }
              name={ name }
              size={ size }
              url={ url }
            />
          ))
        }
      </section>
    </main>
  );
}
