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


const BasicCard = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState('');
  const [secondaryColor, setSecondaryColor] = React.useState('');
  const [twitterHandle, setTwitterHandle] = React.useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const teams = {
    109: {
      primary: '#A71930',
      secondary: '#E3D4AD',
    },
    144: {
      primary: '#CE1141',
      secondary: '#13274F',
    },
    110: {
      primary: '#DF4601',
      secondary: '#000000',
    },
    111: {
      primary: '#BD3039',
      secondary: '#0C2340',
    },
    112: {
      primary: '#0E3386',
      secondary: '#CC3433',
    },
    145: {
      primary: '#27251F',
      secondary: '#C4CED4',
    },
    113: {
      primary: '#C6011F',
      secondary: '#000000',
    },
    114: {
      primary: '#0C2340',
      secondary: '#E31937',
    },
    115: {
      primary: '#33006F',
      secondary: '#C4CED4',
    },
    116: {
      primary: '#0C2340',
      secondary: '#FA4616',
    },
    117: {
      primary: '#002D62',
      secondary: '#EB6E1F',
    },
    118: {
      primary: '#004687',
      secondary: '#BD9B60',
    },
    108: {
      primary: '#003263',
      secondary: '#BA0021',
    },
    119: {
      primary: '#005A9C',
      secondary: '#A5ACAF',
    },
    146: {
      primary: '#00A3E0',
      secondary: '#000000',
    },
    158: {
      primary: '#FFC52F',
      secondary: '#12284B',
    },
    142: {
      primary: '#002B5C',
      secondary: '#D31145',
    },
    121: {
      primary: '#002D72',
      secondary: '#FF5910',
    },
    147: {
      primary: '#0C2340',
      secondary: '#C4CED3',
    },
    133: {
      primary: '#003831',
      secondary: '#EFB21E',
    },
    143: {
      primary: '#E81828',
      secondary: '#002D72',
    },
    134: {
      primary: '#27251F',
      secondary: '#FDB827',
    },
    138: {
      primary: '#C41E3A',
      secondary: '#0C2340',
    },
    135: {
      primary: '#2F241D',
      secondary: '#FFC425',
    },
    137: {
      primary: '#FD5A1E',
      secondary: '#27251F',
    },
    136: {
      primary: '#0C2C56',
      secondary: '#005C5C',
    },
    139: {
      primary: '#092C5C',
      secondary: '#8FBCE6',
    },
    140: {
      primary: '#003278',
      secondary: '#C0111F',
    },
    141: {
      primary: '#134A8E',
      secondary: '#1D2D5C',
    },
    120: {
      primary: '#AB0003',
      secondary: '#14225A',
    }
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
    setPrimaryColor(teams[props.team_id].primary);
    setSecondaryColor(teams[props.team_id].secondary);
    let handle = 'http://www.twitter.com/' + props.twitter_id
    setTwitterHandle(handle);
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
