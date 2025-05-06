import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import { App } from './App';
import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <App /> */}
    <FirstApp title="Hello World" subtitle={'test subtitle'} showTitle />
    {/* <CounterApp value={ 10 } /> */}
  </StrictMode>
);