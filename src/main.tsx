import { App } from './App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './firstApp';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <FirstApp />
  </StrictMode>
);