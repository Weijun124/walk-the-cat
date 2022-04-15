import React, {useState, useEffect, useRef} from 'react';
import '../App.css';
import axios from 'axios';


const NavBar = (props) => {
    console.log(props);
    const dropdownRef = useRef(null);
    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isWsActive, setIsWsActive] = useState(false);
    const [isRecActive, setIsRecActive] = useState(false);
    const [isMorActive, setIsMorActive] = useState(false);

    const onClick = (e) => {
        // console.log(e.target.id === "rec");
        if(e.target.id === "ws") setIsWsActive(!isWsActive);
        if(e.target.id === "rec") setIsRecActive(!isRecActive);
        if(e.target.id === "mor") setIsMorActive(!isMorActive);
        
    }
    
    // console.log(isActive);
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
                    <div className="dropdown">
                        <button onClick={onClick} id="ws" className="nav-dropdown-btn">Workspaces <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
                        <nav ref={dropdownRef} className={`menu ${isWsActive ? 'active' : 'inactive'}`}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </nav>
                    </div>
                    <div className="dropdown">
                        <button onClick={onClick} id="rec" className="nav-dropdown-btn">Recent <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
                        <nav ref={dropdownRef1} className={`menu ${isRecActive ? 'active' : 'inactive'}`}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </nav>
                    </div>
                    <div className="dropdown">
                        <button onClick={onClick} id="mor" className="nav-dropdown-btn">More <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
                        <nav ref={dropdownRef2} className={`menu ${isMorActive ? 'active' : 'inactive'}`}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </nav>
                    </div>
                </div>
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
