import React from 'react';
// import ReactDOM from 'react-dom/client';
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

// const root2 = createRoot(document.getElementById('root-notifications'));
// root2.render(
//   // <React.StrictMode>
//   <Notifications />
//   // </React.StrictMode>
// );
