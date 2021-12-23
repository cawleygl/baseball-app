import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import LandingPage from './pages/LandingPage';
import { Container } from '@mui/material';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core';

function App() {
  const theme = createTheme({
    palette: {
      az: {
        primary: '#A71930',
        secondary: '#E3D4AD',
      },
      atl: {
        primary: '#CE1141',
        secondary: '#13274F',
      },
      bal: {
        primary: '#DF4601',
        secondary: '#000000',
      },
      bos: {
        primary: '#BD3039',
        secondary: '#0C2340',
      },
      chc: {
        primary: '#0E3386',
        secondary: '#CC3433',
      },
      cws: {
        primary: '#27251F',
        secondary: '#C4CED4',
      },
      cin: {
        primary: '#C6011F',
        secondary: '#000000',
      },
      cle: {
        primary: '#0C2340',
        secondary: '#E31937',
      },
      col: {
        primary: '#33006F',
        secondary: '#C4CED4',
      },
      det: {
        primary: '#0C2340',
        secondary: '#FA4616',
      },
      hou: {
        primary: '#002D62',
        secondary: '#EB6E1F',
      },
      kc: {
        primary: '#004687',
        secondary: '#BD9B60',
      },
      laa: {
        primary: '#003263',
        secondary: '#BA0021',
      },
      lad: {
        primary: '#005A9C',
        secondary: '#A5ACAF',
      },
      mia: {
        primary: '#00A3E0',
        secondary: '#000000',
      },
      mil: {
        primary: '#FFC52F',
        secondary: '#12284B',
      },
      min: {
        primary: '#002B5C',
        secondary: '#D31145',
      },
      nym: {
        primary: '#002D72',
        secondary: '#FF5910',
      },
      nyy: {
        primary: '#0C2340',
        secondary: '#C4CED3',
      },
      oak: {
        primary: '#003831',
        secondary: '#EFB21E',
      },
      phi: {
        primary: '#E81828',
        secondary: '#002D72',
      },
      pit: {
        primary: '#27251F',
        secondary: '#FDB827',
      },
      stl: {
        primary: '#C41E3A',
        secondary: '#0C2340',
      },
      sd: {
        primary: '#2F241D',
        secondary: '#FFC425',
      },
      sf: {
        primary: '#FD5A1E',
        secondary: '#27251F',
      },
      sea: {
        primary: '#0C2C56',
        secondary: '#005C5C',
      },
      tb: {
        primary: '#092C5C',
        secondary: '#8FBCE6',
      },
      tx: {
        primary: '#003278',
        secondary: '#C0111F',
      },
      tor: {
        primary: '#134A8E',
        secondary: '#1D2D5C',
      },
      was: {
        primary: '#AB0003',
        secondary: '#14225A',
      }
    }
  });

return (
  <div className="App">
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container maxWidth="sm">
        <LandingPage />
      </Container>
    </ThemeProvider>

  </div>
);
}

export default App;
