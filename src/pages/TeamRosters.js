import { useState, useEffect } from 'react';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow, ButtonGroup } from '@mui/material';
import api from '../utils/api';
import teamData from '../utils/teamData';

function LandingPage() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    console.log("SelectedTeam:", selectedTeam);
  }, [selectedTeam]);

  const handleTeamSelect = teamID => {
    api.teamRoster(teamID)
      .then(res => {
        setSelectedTeam(res.data.roster_40.queryResults.row);
      })
      .catch(err => console.log(err));
  };

  return (
    <Grid container spacing={2} sx={{ mt: 2 }} >
      <Grid item xs={4}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {teamData.map(team => {
            return (
              <Button
                fullwidth="true" key={team.teamID} value={team.teamID} onClick={event => {
                  handleTeamSelect(event.target.value);
                }}
              >
                {team.displayName}
              </Button>
            );
          })
          }

        </ButtonGroup>
      </Grid>
      {selectedTeam ?
        <Grid item xs={8}>
          
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Lineup</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Position</TableCell>
                <TableCell align="right">Starter</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedTeam.map((player) => (
                <TableRow
                  key={player.player_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {player.name_display_last_first}
                  </TableCell>
                  <TableCell align="right">{player.jersey_number}</TableCell>
                  <TableCell align="right">{player.position_txt}</TableCell>
                  <TableCell align="right">{player.starter_sw}</TableCell>
                  <TableCell align="right">{player.status_code}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        : null}
    </Grid>
  )
}

export default LandingPage;
