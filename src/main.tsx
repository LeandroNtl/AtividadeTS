import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
