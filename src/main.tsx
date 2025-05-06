import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}