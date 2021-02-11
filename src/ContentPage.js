import React, { Fragment } from "react";
import InicialPage from "./Content/InicialPage/InicialPage";
// import building from './img/building.jpg'
// import Technologies from "./Content/InicialPage/Technologies";
import AboutMe from "./Content/InicialPage/AboutMe";


export default function ContentPage ({themeLight}){

    return(
        <Fragment>
            <InicialPage themeLight={themeLight}/> 
            <div id="AboutMe">
                    <AboutMe/>
            </div>
            <div id="Contact" className="impar">
                <div className="content">
                    {/* <span>{"EN CONSTRUCCIÓN"}</span> */}
                </div>
                {/* <img src={building}/> */}
            </div>
            <div id="Skills" className="par">
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