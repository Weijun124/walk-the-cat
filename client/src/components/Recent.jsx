import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Recent = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const closeDropDown = e => {
            console.log(e)
            if (e.path[0].tagName !== 'BUTTON') {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);


    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={() => setIsActive(prev => !prev)} id="rec" className="nav-dropdown-btn">Recent <img className="arrow-icon" src="./pictures/down-arrow-icon.png" /></button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Recent Boards</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image">WTC</div>
                        <a href="#">Walk the Cat</a>
                    </div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image-kb"></div>
                        <a href="#">Kanban Board</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Recent;