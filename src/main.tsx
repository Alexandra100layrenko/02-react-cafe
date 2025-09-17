//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './components/App.tsx'
import 'modern-normalize'

//*createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)
// main.tsx

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
    <h1>Welcome to React</h1>
    <p>
      This is JSX — it looks like HTML, but it's not quite the same. It has its
      own rules!
    </p>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </div>
);
