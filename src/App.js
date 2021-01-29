import React, { Fragment, useState, useMemo } from 'react';
import NavBar from './Components/NavBar/NavBar'; 
import ScrollTop from './Components/ScrollTop/ScrollTop';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'; 
import ContentPage from './ContentPage';
import './css/styles.css';
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/core'


const App = ( props ) =>{

    const [themeModeLight, setThemeModeLight ] = useState(true);
    const theme = useMemo(
        () =>
          createMuiTheme({
            palette: {
              type: themeModeLight ? 'dark' : 'light',
            },
          }),
        [themeModeLight],
      );

    return(
        <Fragment>
            <ThemeProvider theme={theme}>
                <NavBar 
                    title={"Aldo Matias"}
                    themeModeLight={themeModeLight}
                    setThemeModeLight={setThemeModeLight}
                /> 
                <ContentPage themeLight={themeModeLight} />
                <ScrollTop {...props}>
                    <Fab color="primary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </ThemeProvider>
        </Fragment>
    );
}
export default App;