
import React, { useState } from 'react';   
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, CssBaseline, Menu, Button, MenuItem, Tooltip, Switch, ThemeProvider } from  '@material-ui/core';

import { GTranslate, Person, ContactMail, NightsStay, GetApp, Brightness7 } from '@material-ui/icons';
import GoToID from '../../Helpers/GoToID';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  appbar:{
    background:'#212121'
  },
  color:{
    color:'#fafafa',
    '&:hover':{
      backgroundColor:'#424242',
    },
    margin:5
  },
  iconSwitch:{
    color:'#fafafa',
    paddingBottom:2,
  }, 
  menu:{
    background:'#424242',
    left:'88%!important',
    color:'#fafafa'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#fff', 
    }, 
  },
});

const NavBar = (props) => {
    const classes = useStyles();
    const {title, themeModeLight, setThemeModeLight } = {...props};
    const [ menuTranslate, setMenuTranslate ] = useState( null );
    
    const openTranslateMenu = ( event ) =>{
        setMenuTranslate(event.currentTarget);
    }

    const closeTranslateMenu = () => {
        setMenuTranslate(null);
    };

    const Actions = () =>{
      return (
        <>
          <Button className={classes.color} startIcon={<Person/>} onClick={(e)=>GoToID(e, "AboutMe")} >
              {"ACERCA DE MI"}
          </Button>
          <Button className={classes.color} startIcon={<ContactMail/>} onClick={(e)=>GoToID(e, "Contact")}  >
              {"CONTACTAR"}
          </Button>
          <Tooltip title="Descargar CV">
            <Button className={classes.color} startIcon={<GetApp/>} >
              {"CV"}
            </Button>
          </Tooltip>
          <Tooltip title="Cambiar idioma">
            <Button  className={classes.color} aria-controls="translate-menu" aria-haspopup="true" onClick={openTranslateMenu} startIcon={<GTranslate/>} >
              
            </Button>
          </Tooltip>
           
          <ThemeProvider theme={theme}>
          <Tooltip title={ themeModeLight ? "Quitar modo nocturno": "Cambiar a modo nocturno"}>
                <Switch icon={<NightsStay className={classes.iconSwitch}/>}  checkedIcon={<Brightness7 className={classes.iconSwitch}/>} checked={themeModeLight} color="primary" onChange={()=>setThemeModeLight(!themeModeLight)} name="checkedC" className={classes.menuTranslate} /> 
              
          </Tooltip>
          </ThemeProvider>
        </>
      );
    }

    return ( 
        <div className={classes.root}>
        <CssBaseline/>
        <AppBar className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <div >
                  <Button onClick={(e)=>GoToID(e, "Inicial")} className={classes.color} >
                    <Typography variant="h6">
                      {title}
                    </Typography>
                  </Button>
                </div>
                <div>
                  <Actions/>
                  <Menu
                    id="simple-menu"
                    anchorEl={menuTranslate}
                    keepMounted
                    open={Boolean(menuTranslate)}
                    onClose={closeTranslateMenu}
                    classes={{ paper: classes.menu }}
                  >
                    <MenuItem className={classes.menuItem} onClick={closeTranslateMenu}>ES</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={closeTranslateMenu}>EN</MenuItem> 
                  </Menu>
                </div>
                
            </Toolbar>
        </AppBar>
        <Toolbar id="back-to-top-anchor" />
        </div> 
    );
}

export default NavBar;
