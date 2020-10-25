import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          animation: 'gradient 15s ease infinite',
          background: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);',
          backgroundSize: '400% 400%',
        },
        '@keyframes gradient': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
