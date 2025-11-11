import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/themes.css';
import './themeSwitcher.js';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
