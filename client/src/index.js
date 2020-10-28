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
          background:
            'radial-gradient( circle farthest-corner at 22.4% 21.7%,  rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )',
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
