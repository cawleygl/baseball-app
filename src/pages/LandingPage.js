import { useState } from 'react';
import { Button, TextField, Grid, ButtonGroup } from '@mui/material';
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
        } else {
          setInfo(queryResults.row);
        }
      })
      .catch(err => console.log(err));
  };

  const handlePlayerSelect = player => {
    console.log(info);
  };



  return (
    <Grid container spacing={2} sx={{ mt: 2 }} >
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
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >

          {info.map(player => {
            return (
              <Button fullwidth="true" key={player.player_id} value={player.player_id}  onClick={event => {
                console.log(event.target.value);
                }}>
                {player.name_display_first_last}: {player.team_abbrev} {player.position}
              </Button>

            );
          })
          }
        </ButtonGroup>

      </Grid>
    </Grid>
  )
}


export default LandingPage;
