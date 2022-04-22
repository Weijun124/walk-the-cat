import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Grid = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        if(e.target.id === "grid") setIsActive(prev => !prev);
    }
    
    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0].tagName !== 'BUTTON' && e.target.id !== "grid") {
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);


    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={onClick} id="grid" className="nav-menu">
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
                <span id="grid" className="square"></span>
            </button>
            <nav ref={dropdownRef} className={`grid-menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Website Engineers</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-title">LinkedIn Profiles</div>
                    <div className="dropdown-list-content">
                        <img className="dropdown-list-image" src="./pictures/creator-image-weijun.jpeg"/>
                        <a href="linkedin.com/in/weijun-huang-631633104">Weijun Huang</a>
                    </div>
                    <div className="dropdown-list-content">
                        <img className="dropdown-list-image" src="./pictures/creator-image-colt.jpeg"/>
                        <a href="https://www.linkedin.com/in/coltskeen/">Colt Skeen</a>
                    </div>
                    <div className="dropdown-list-content">
                        <img className="dropdown-list-image" src="./pictures/creator-image-shaun.jpeg"/>
                        <a href="https://www.linkedin.com/in/houcksm/">Shaun Houck</a>
                    </div>
                    <div className="dropdown-list-content">
                        <img className="dropdown-list-image" src="./pictures/creator-image-isaias.jpeg"/>
                        <a href="https://www.linkedin.com/in/isaias-medellin/">Isaias Medellin</a>
                    </div>
                    <div className="dropdown-list-content">
                        <img className="dropdown-list-image" src="./pictures/creator-image-daniel.jpeg"/>
                        <a href="https://www.linkedin.com/in/daniel-moyo/">Daniel Moyo</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Grid;