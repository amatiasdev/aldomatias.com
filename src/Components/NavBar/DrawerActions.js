import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core'
import { ContactMail, GTranslate, Person, GetApp } from '@material-ui/icons'
import GoToID from '../../Helpers/GoToID'


export default function DrawerActions({openDrawer, setOpenDrawer, setOpenModal}) {
    
    const [ menuTranslate, setMenuTranslate ] = useState( null );

    const openTranslateMenu = ( event ) =>{
        setMenuTranslate(event.currentTarget);
    }

    const closeTranslateMenu = () => {
        setMenuTranslate(null);
    };
    
    return (
        <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                <ListItem button key={"ACERCA DE MI"} onClick={(e)=>{ GoToID(e, "AboutMe");}}>
                    <ListItemIcon><Person/></ListItemIcon>
                    <ListItemText primary={"ACERCA DE MI"} />
                </ListItem>
                <ListItem button key={"CONTACTAR"} onClick={(e)=>{GoToID(e, "Contact");}}>
                    <ListItemIcon><ContactMail/></ListItemIcon>
                    <ListItemText primary={"CONTACTAR"} />
                </ListItem>
                <ListItem button key={"CV"} onClick={(e)=>{setOpenModal(true);}}>
                    <ListItemIcon><GetApp/></ListItemIcon>
                    <ListItemText primary={"CV"} />
                </ListItem>
                <ListItem button key={"TRADUCIR"} onClick={openTranslateMenu}>
                    <ListItemIcon><GTranslate/></ListItemIcon>
                    <ListItemText primary={"TRADUCIR"} />
                </ListItem>
            </List>
            <Menu
                id="simple-menu"
                anchorEl={menuTranslate}
                keepMounted
                open={Boolean(menuTranslate)}
                onClose={closeTranslateMenu} 
                >
                <MenuItem  onClick={closeTranslateMenu}>ES</MenuItem>
                <MenuItem  onClick={closeTranslateMenu}>EN</MenuItem> 
            </Menu>
        </Drawer>
    )
}
