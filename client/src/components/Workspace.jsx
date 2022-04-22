import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Workspace = (props) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);

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
            <button ref={dropdownRef} onClick={() => setIsActive(prev => !prev)} id="ws" className="nav-dropdown-btn">Workspaces <img className="arrow-icon" src="./pictures/down-arrow-icon.png" /></button>
            <nav className={'menu ' + (isActive ? 'active' : 'inactive')}>
                <div className="dropdown-title">Workspaces</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-title">Current Workspaces</div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image">WTC</div>
                        <a href="#">Walk the Cat</a>
                    </div>
                </div>
            </nav>
        </div >
    );
}


export default Workspace;