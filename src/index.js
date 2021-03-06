import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './mediaqueries.css';
import reportWebVitals from './reportWebVitals';

import App from './components/App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
