import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import api from '../utils/api';

function LandingPage() {

  const [player, setPlayer] = useState('');
  const [info, setInfo] = useState([]);

  const searchAPI = player => {
    api.playerSearch(player)
      .then(res => {
        const { queryResults } = res.data.search_player_all
        console.log("queryResults", queryResults);
        console.log("totalSize", queryResults.totalSize);
        if (queryResults.totalSize === "1") {
          setInfo([queryResults.row]);
          console.log("1111");
        } else {
          setInfo(queryResults.row);
          console.log("Moremoremore");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField id="player-input" label="Player" variant="filled" onChange={event => {
          setPlayer(event.target.value);
          console.log(event.target.value);
        }} />
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" onClick={() => { searchAPI(player); }}>Search</Button>
      </Grid>
      <Grid item xs={12}>
        {info.map(player => {
          return (
            <TextField fullwidth id={player.id} value={player.name_display_first_last} />
          );
        })
        }
      </Grid>
    </Grid>
  )
}


export default LandingPage;
