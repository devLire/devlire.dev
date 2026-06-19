import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { DevLireApp } from './DevLireApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevLireApp />
  </StrictMode>
);
