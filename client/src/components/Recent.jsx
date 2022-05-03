import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Recent = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        if(e.target.id === "rec") setIsActive(prev => !prev);
    }

    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0].tagName !== 'BUTTON' && e.target.id !== "rec") {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);


    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={onClick} id="rec" className="nav-dropdown-btn">Recent <img id="rec" className="arrow-icon" src="./pictures/down-arrow-icon.png" /></button>
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