import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import MyState from './context/Mystate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyState>

    <App />
  </MyState>
);

