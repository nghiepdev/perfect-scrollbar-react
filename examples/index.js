import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Fork from './Fork';
import Scrollbar from '../src';

import './styles.css';

ReactDOM.render(
  <div style={{ display: 'flex', height: '100vh' }}>
    <Scrollbar>
      <App />
      <Fork />
    </Scrollbar>
  </div>,
  document.getElementById('app')
);
