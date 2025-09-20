import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './components/App/App.tsx'
import 'modern-normalize'

createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
