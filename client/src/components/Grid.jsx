import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Grid = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const closeDropDown = e => {
            console.log(e)
            if (e.path[0].tagName !== 'BUTTON') {
                if (e.target.id === 'grid') setIsActive(!isActive)
                setIsActive(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, []);


    return (
        <div className="dropdown">
            <button ref={dropdownRef} onClick={() => setIsActive(prev => !prev)} id="grid" className="nav-menu">
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
                <div className="dropdown-title">More Resouces</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-title">Discover</div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image-sta"></div>
                        <a href="https://resources.bestfriends.org/article/walking-cat">Save Them All</a>
                    </div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image-th"></div>
                        <a href="https://www.treehugger.com/how-to-train-your-cat-to-walk-on-a-leash-4863691">Treehugger</a>
                    </div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image-rspca"></div>
                        <a href="https://kb.rspca.org.au/knowledge-base/should-i-walk-my-cat-on-a-leash/">RSPCA Knowledge Base</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Grid;