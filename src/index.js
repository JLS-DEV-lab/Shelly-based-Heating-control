import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StrictMode } from 'react';

import * as ReactDOMClient from 'react-dom/client';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
