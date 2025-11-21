// src/main.tsx (or src/index.tsx in some setups)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // If you're using global styles
import App from './App';  // Importing your main App component

// The `createRoot` method is used in React 18 for concurrent rendering
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />  {/* Render your App component here */}
  </React.StrictMode>
);