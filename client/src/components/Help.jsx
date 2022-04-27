import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Help = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0].tagName !== 'BUTTON') {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);

    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={() => setIsActive(prev => !prev)} id="help" className="nav-dropdown-help-btn">i </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Information</div>
                <img className="star-board-pic" src="./pictures/help-dropdown-pic.png" />
                <div className="dropdown-help-description">
                    Get inspired by dozens of different Walk the Cat workflows
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