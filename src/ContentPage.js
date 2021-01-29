import React, { Fragment } from "react";
import InicialPage from "./Content/InicialPage/InicialPage";

export default function ContentPage ({themeLight}){

    return(
        <Fragment>
            <InicialPage themeLight={themeLight}/> 
            <div id="AboutMe" className="par">
                <div className="content">

                </div>
            </div>
            <div id="Contact" className="impar">
                <div className="content">

                </div>
            </div>
            <div id="CV" className="par">
                <div className="content">

                </div>
            </div>
            <div id="Skills" className="impar">
                <div className="content">

                </div>
            </div> 
        </Fragment>
    )
}