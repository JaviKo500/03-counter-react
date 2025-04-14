import { App } from './App';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
    <FirstApp title="Hello World" subtitle={'test subtitle'} showTitle />
  </StrictMode>
);