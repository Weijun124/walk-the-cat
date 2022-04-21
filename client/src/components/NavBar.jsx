import React, {useState, useEffect, useRef} from 'react';
import '../App.css';
import Workspace from "./Workspace";
import Recent from "./Recent";
import More from "./More";
import Help from "./Help";
import axios from 'axios';


const NavBar = (props) => {
    // console.log(props.data);
    const data = props.data;
    

    return (
        <header className="nav-bar">
            <div className="nav-left">
                <a href="#" className="nav-menu">
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                </a>
                <div className="logo">
                    <img src="./pictures/cat-logo.png" />
                </div>
                <div className="dropdown-container">
                    <Workspace className="dropdown" data={data}/>
                    <Recent className="dropdown" data={data}/>
                    <More className="dropdown" data={data}/>
                </div>
                <button className="nav-create-button">Create</button>
            </div>
            <div className="nav-right">
                <button className="search-button">
                    <img src="./pictures/search-icon.png" />
                </button>
                <input className="nav-search" type="text" placeholder="Search"/>
                <Help className="dropdown" data={data}/>
                {/* <button className="help">i</button> */}
                <a className="notification-icon"><img src="./pictures/notification-icon.png"/></a>
                <a className="gitHub" href="https://github.com/walk-the-cat/walk-the-cat/"><img id="gitIcon" src="pictures/GitHub-Mark-Light-32px.png" border="0" /></a>
            </div>
        </header>
    )
}

export default NavBar;
