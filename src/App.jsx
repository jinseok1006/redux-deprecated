import React from 'react';
import Sugang from './pages/sugang';

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'noto sans kr',
  },
  palette: {
    mode: 'dark',
    primary: { main: 'rgb(102,157,246)' },
    background: { paper: '#1a2a38' },
  },
});

export default function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { fontFamily: 'noto sans kr', backgroundColor: '#454b52' },
        }}
      />
      <ThemeProvider theme={theme}>
        <Sugang />
      </ThemeProvider>
    </>
  );
}
