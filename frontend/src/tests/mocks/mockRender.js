import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UploadProvider from '../../provider/UploadProvider';

const renderWithContext = (component, container) => {
  const router = render(
    <BrowserRouter>
      <UploadProvider>
        { component }
      </UploadProvider>
    </BrowserRouter>,
    container,
  );

  return router;
};

export {
  renderWithContext,
};
