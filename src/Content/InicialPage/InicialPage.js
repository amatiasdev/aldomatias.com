import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Aldo from '../../img/Aldo.png';
import freecodeCampBlack from '../../img/freecodecampBlack.png';
import freecodeCamp from '../../img/freecodecamp.png'; 
import { Grid, Button } from '@material-ui/core';
import GoToID from '../../Helpers/GoToID';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  }, 
  media:{
    height:200,
    width: 200,
    borderRadius: '50%',
    transition: 'transform .2s',
    '&:hover':{
      transform: 'scale(0.9)'
    },
  }
}));

export default function InicialPage({themeLight}) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div id="Inicial">
      <Box
        display="flex" 
        justifyContent="center" 
        p={1}
        m={8}  
      >  
      <Card className={classes.root} >
        <CardHeader
          title="Desarrollador de Software"
          subheader="Ing. en Sistemas Computacionales."
        />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <CardMedia
              className={classes.media}
              image={Aldo}
            />
          </Grid>
        </Grid>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Desarrollador de Software residente de la ciudad de México, entusiasta de tecnologías como Bitcoin, Blockchain y la computación cuantica.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
            Actualmente soy desarrollador Frontend con React.js en iGenter México.
          </Typography>
        </CardContent>
        <CardActions >
          <Grid container>
            <Grid item xs>
              <IconButton aria-label="add to favorites" href="https://github.com/rheazyk" target="_blank">
                <Icon className="fa fa-github" />
              </IconButton>
            </Grid>
            <Grid item xs>
              <IconButton aria-label="add to favorites" href="https://www.linkedin.com/in/aldomatias-/" target="_blank">
                <Icon className="fa fa-linkedin" />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <div style={{paddingTop:themeLight? 14 :0}}>  
                <a href="https://www.freecodecamp.org/rheazyk" target="_blank">
                  <img src={themeLight ? freecodeCamp :freecodeCampBlack} 
                  style={{width: '100%',  height: '100%',}}
                  alt="freecodecamp.org"/>
                </a> 
              </div>
            </Grid>
          </Grid>
        </CardActions>
        <CardActions> 
          <Grid container
          direction="column"
          justify="center"
          alignItems="center">
            <Grid item xs>
              <Button variant='contained' color='primary' onClick={(e)=>GoToID(e, 'Contact')}>Contactar</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      </Box>
    </div>
  );
}
 