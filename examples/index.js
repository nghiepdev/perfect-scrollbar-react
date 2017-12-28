import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Fork from './Fork';

import './styles.css';

ReactDOM.render(
  <React.Fragment>
    <App />
    <Fork />
  </React.Fragment>,
  document.getElementById('app')
);
