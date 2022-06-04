import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UploadProvider from './provider/UploadProvider';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <UploadProvider>
        <Router />
      </UploadProvider>
    </BrowserRouter>
  );
}

export default App;
