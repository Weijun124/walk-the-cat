import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';


const NavBar = (props) => {
    console.log(props);
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
                <nav>
                    <a className="nav-link">Workspaces</a>
                    <a className="nav-link">Recent</a>
                    <a className="nav-link">More</a>
                </nav>
                <button className="nav-create-button">Create</button>
            </div>
            <div className="nav-right">
                <button className="search-button">
                    {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                    <img src="./pictures/search-icon.png" />
                </button>
                <input className="nav-search" type="text" placeholder="Search"/>
                <p className="help">i</p>
                <a className="notification-icon"><img src="./pictures/notification-icon.png"/></a>
                <a class="gitHub" href="https://github.com/walk-the-cat/walk-the-cat/"><img id="gitIcon" src="pictures/GitHub-Mark-Light-32px.png" border="0" /></a>
            </div>
        </header>
    )
}

export default NavBar;
