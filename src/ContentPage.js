import { Paper } from "@material-ui/core";
import React, { Fragment } from "react";
import FormContact from "./Content/Forms/FormContact";
import InicialPage from "./Content/InicialPage/InicialPage";
import AboutMe from "./Content/InicialPage/AboutMe";

export default function ContentPage ({themeLight}){

    return(
        <Fragment>
            <InicialPage themeLight={themeLight}/>  
            <Paper square id="AboutMe" >
                <AboutMe/>
            </Paper>
            <Paper square id="Contact" >
                <FormContact themeLight={themeLight}/>
            </Paper>
            <div id="CV" className="par">
                <div className="content">
                    {/* <span>{"EN CONSTRUCCIÓN"}</span> */}
                </div>
            </div>
            <div id="Technologies">
                <div className="content">
                    {/* <Technologies/> */}
                </div>
            </div> 
        </Fragment>
    )
}