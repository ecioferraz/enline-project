import React from 'react';
import { act } from 'react-dom/test-utils';
import { renderWithContext } from './mocks/mockRender';
import { unmountComponentAtNode } from 'react-dom';
import FileForm from '../templates/FileForm';
import UploadCard from '../templates/UploadCard';

describe('<FileForm />', () => {
  let container = null;
  let fileForm;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  beforeEach(() => {
    act(() => {
      renderWithContext(
        <FileForm />,
        container,
      );
    });

    fileForm = container.querySelector('form');
  });

  it('should render a <FileForm />', () => {
    expect(fileForm).toBeTruthy();
  });
});

describe('<UploadCard />', () => {
  let container = null;
  let uploadCard;

  beforeAll(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterAll(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  beforeEach(() => {
    act(() => {
      renderWithContext(
        <UploadCard />,
        container,
      );
    });

    uploadCard = container.querySelector('.upload-card');
  });

  it('should render a <UploadCard />', () => {
    expect(uploadCard).toBeTruthy();
  });
});
