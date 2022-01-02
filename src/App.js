import * as React from 'react';
import ButtonAppBar from './components/ButtonAppBar';
import PlayerSearch from './pages/PlayerSearch';
import TeamRosters from './pages/TeamRosters';

import { Container } from '@mui/material';
import './App.css';

function App() {
return (
  <div className="App">
      <ButtonAppBar />
      <Container maxWidth="sm">
        <TeamRosters />
      </Container>

  </div>
);
}

export default App;
