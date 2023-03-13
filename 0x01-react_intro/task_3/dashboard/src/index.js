import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Notifications />
    <App />
  </React.Fragment>
);
