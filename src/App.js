import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import LandingPage from './pages/LandingPage';
import { Container } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Container maxWidth="sm">
        <LandingPage />
      </Container>
    </div>
  );
}

export default App;
