import React from 'react';
import ReactDOM from 'react-dom/client';
//import {Details} from './pages/Details'
//import { SignUp } from './pages/SignUp';
//import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

import { ThemeProvider } from 'styled-components'; // arquivo de cores
import theme from "./styles/theme";
import GlobalStyles from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
)
