
import React, { useState } from 'react';   
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, CssBaseline, Menu, Button, MenuItem, Tooltip, Switch, ThemeProvider, IconButton, Modal } from  '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { GTranslate, Person, ContactMail, NightsStay, GetApp, Brightness7 } from '@material-ui/icons';
import GoToID from '../../Helpers/GoToID';
import DrawerActions from './DrawerActions';
import CVAldo from '../../files/CV Aldo Matias.pdf';
import ModalService from '../Modal/ModalService';

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
    left:'88%',
    color:'#fafafa'
  },
  actions:{
    [ theme.breakpoints.up('xs', 'sm')]: {
      display:'none',
    }, 
    [ theme.breakpoints.up('md','lg', 'xl')]: {
      display:'flex',
    },
  },
  menuButton:{
    [ theme.breakpoints.up('xs', 'sm')]: {
      display:'inline-flex',
    }, 
    [ theme.breakpoints.up('md','lg', 'xl')]: {
      display:'none',
    },  
  }, 
  menuTranslate:{
    margin: 5
  }, 
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
    const [ openDrawer, setOpenDrawer ] = useState( false );
    const [ openModal, setOpenModal ] = useState( false );
    const anchor ="anchorMenuButton";
    const openTranslateMenu = ( event ) =>{
        setMenuTranslate(event.currentTarget);
    }

    const closeTranslateMenu = () => {
        setMenuTranslate(null);
    };

    const downloadCV = ()=>{ 
      setOpenModal(true);
    }

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
            <Button className={classes.color} startIcon={<GetApp/>} onClick={()=>{downloadCV()}} >
              {"CV"}
            </Button>
          </Tooltip>
          <Tooltip title="Cambiar idioma">
            <Button  className={classes.color} aria-controls="translate-menu" aria-haspopup="true" onClick={openTranslateMenu} startIcon={<GTranslate/>}  />
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
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={()=>setOpenDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                  <Button onClick={(e)=>GoToID(e, "back-to-top-anchor")} className={classes.color} >
                    <Typography variant="h6">
                      {title}
                    </Typography>
                  </Button>
                </div>
                <div className={classes.actions}>
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
        <DrawerActions anchor={anchor} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} setOpenModal={setOpenModal}/>
        <ModalService
          openModal={openModal}
          setOpenModal={setOpenModal} 
          parentNode={"root"}
        >
          <object data={CVAldo} download={'Aldo Matias CV.pdf'} type='application/pdf' width='100%' height='100%'></object>
        </ModalService>
        </div> 
    );
}

export default NavBar;