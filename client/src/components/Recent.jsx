import React, {useState, useEffect, useRef} from 'react';
import '../App.css';

const Recent = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        // console.log(e.target.id === "rec");
        if(e.target.id === "rec") setIsActive(!isActive);
    }

    // useEffect(() => {
    //     const pageClickEvent = (e) => {
    //         // console.log(e);
    //         // console.log(dropdownRef);
    //         // console.log(dropdownRef.current);
            
    //         if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)){
    //             setIsActive(!isActive);
    //         }
    //     }
    //     if(isActive) window.addEventListener('click', pageClickEvent);

    //     //clean-up
    //     return() => window.removeEventListener('click', pageClickEvent);
        
    // }, [isActive]);

    return (
        <div className="dropdown">
            <button onClick={onClick} id="rec" className="nav-dropdown-btn">Recent <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </nav>
        </div>
    );
}


export default Recent;