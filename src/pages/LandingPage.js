import { useState, useEffect } from 'react';
import { Button, TextField, Grid, ButtonGroup } from '@mui/material';
import api from '../utils/api';
import Card from '../components/Card';

function LandingPage() {

  const [player, setPlayer] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    console.log("SelectedPlayer:", selectedPlayer);
  }, [selectedPlayer]);

  const handlePlayerSearch = player => {
    api.playerSearch(player)
      .then(res => {
        const { queryResults } = res.data.search_player_all
        console.log("Search Results:", queryResults);
        console.log("totalSize", queryResults.totalSize);
        if (queryResults.totalSize === "1") {
          setSearchResults([queryResults.row]);
        } else {
          setSearchResults(queryResults.row);
        }
      })
      .catch(err => console.log(err));
  };

  const handlePlayerSelect = playerId => {
    api.playerInfo(playerId)
      .then(res => {
        const { player_info: { queryResults } } = res.data
        setSelectedPlayer(queryResults.row);
      })
      .catch(err => console.log(err));
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
        <Button variant="contained" onClick={() => { handlePlayerSearch(player); }}>Search</Button>
      </Grid>
      <Grid item xs={4}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >

          {searchResults.map(player => {
            return (
              <Button fullwidth="true" key={player.player_id} value={player.player_id} onClick={event => {
                handlePlayerSelect(event.target.value);
              }}>
                {player.name_display_first_last} - {player.team_abbrev} {player.position}
              </Button>

            );
          })
          }
        </ButtonGroup>

      </Grid>
      {selectedPlayer ? 
      <Grid item xs={8}>
        <Card {...selectedPlayer} />
      </Grid>
      : null }
    </Grid>
  )
}

export default LandingPage;
