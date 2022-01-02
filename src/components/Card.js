import * as React from 'react';
import dayjs from 'dayjs';
import Card from "@mui/material/Card";
import Link from '@mui/material/Link';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import teamData from '../utils/teamData';


const BasicCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState('');
  const [secondaryColor, setSecondaryColor] = React.useState('');
  const [twitterHandle, setTwitterHandle] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    color: secondaryColor,
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  React.useEffect(() => {
    console.log("Card Props:", props);
    setPrimaryColor(teamData.mlbTeams.find(e => e.teamId = props.team_id).primary);
    setSecondaryColor(teamData.find(e => e.teamId = props.team_id).secondary);
    setTwitterHandle('http://www.twitter.com/' + props.twitter_id);
  }, [props]);

  return (
    <Card sx={{ minWidth: 275, bgcolor: primaryColor }}>
      <CardContent>
        <Typography sx={{ fontSize: 22, color: secondaryColor, fontWeight: 'fontWeightBold' }} gutterBottom>
          {props.name_display_first_last} - {props.primary_position_txt}, #{props.jersey_number}
        </Typography>
        <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
          {props.team_name}
        </Typography>
        <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
          Bats: {props.bats}, Throws: {props.throws}
        </Typography>
        <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
          Height: {props.height_feet}'{props.height_inches}", Weight: {props.weight} lbs
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="More Info"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {props.twitter_id ?
            <Typography gutterBottom>
              <Link sx={{ fontSize: 20, color: secondaryColor, fontWeight: 'fontWeightLight' }} href={twitterHandle} underline="hover" gutterBottom>
                {props.twitter_id}
              </Link>
            </Typography>
            : null}
          <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
            Born: {dayjs(props.birth_date).format('MMMM D, YYYY')}, in {props.birth_city}, {props.birth_state ? props.birth_state : props.birth_country}, ({props.age} Years Old)
          </Typography>
          <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
            Debut: {dayjs(props.debut).format('MMMM D, YYYY')}
          </Typography>

          {props.high_school ?
            <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
              High School: {props.high_school}
            </Typography>
            : null}
          {props.college ?
            <Typography sx={{ fontSize: 14, color: secondaryColor }} gutterBottom>
              College: {props.college}
            </Typography>
            : null}

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BasicCard;
