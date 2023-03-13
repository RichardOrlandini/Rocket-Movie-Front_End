import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './routes';

import { ThemeProvider } from 'styled-components'; // arquivo de cores
import theme from "./styles/theme";
import GlobalStyles from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes/>
    </ThemeProvider>
  </React.StrictMode>
)
