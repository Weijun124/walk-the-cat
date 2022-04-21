import React, {useState, useEffect, useRef} from 'react';
import '../App.css';

const Help = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        if(e.target.id === "help") setIsActive(!isActive);
    }

    return (
        <div className="dropdown">
            <button onClick={onClick} id="help" className="nav-dropdown-help-btn">i </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Information</div>
                <img className="star-board-pic" src="./pictures/help-dropdown-pic.png"/>
                <div className="dropdown-help-description">
                    Get inspired by dozens of different Trello workflows
                    <a id="help-link">Get a new tip.</a>
                </div>
                <nav className="help-link-menu">
                    <a id="help-links">Pricing</a>
                    <a id="help-links">Apps</a>
                    <a id="help-links">Blog</a>
                    <a id="help-links">Privacy</a>
                    <a id="help-links">More...</a>
                </nav>
            </nav>
        </div>
    );
}


export default Help;