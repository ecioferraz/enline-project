import React, { useEffect, useState } from 'react';
import { getRequest } from '../services/APIRequests';
import FileForm from '../templates/FileForm';
import UploadCard from '../templates/UploadCard';

export default function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const getUploads = async () => {
      const { data } = await getRequest('/');
      setUploads(data);
    };

    getUploads();
  }, []);

  return (
    <main>
      <FileForm />
      <section>
        {
          uploads.map(({ _id: id, name, size, url }) => (
            <UploadCard
              key={ id }
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
