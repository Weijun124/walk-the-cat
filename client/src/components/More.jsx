import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const More = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        if(e.target.id === "mor") setIsActive(prev => !prev);
    }
    
    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0].tagName !== 'BUTTON' && e.target.id !== "mor") {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);

    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={onClick} id="mor" className="nav-dropdown-btn">Starred <img id="mor" className="arrow-icon" src="./pictures/down-arrow-icon.png" /></button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Starred Boards</div>
                <img className="star-board-pic" src="./pictures/StarredBoards.png" />
                <div className="dropdown-description">Star important boards to access them quickly and easily.</div>
            </nav>
        </div>
    );
}


export default More;