import React, {useState, useEffect, useRef} from 'react';
import '../App.css';

const More = (props) => {
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        // console.log(e.target.id === "rec");
        if(e.target.id === "mor") setIsActive(!isActive);
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
            <button onClick={onClick} id="mor" className="nav-dropdown-btn">Starred <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Starred Boards</div>
                <img className="star-board-pic" src="./pictures/StarredBoards.png"/>
                <div className="dropdown-description">Star important boards to access them quickly and easily.</div>
            </nav>
        </div>
    );
}


export default More;