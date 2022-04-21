import React, {useState, useEffect, useRef} from 'react';
import '../App.css';

const Workspace = (props) => {
    // console.log(props);
    const dropdownRef = useRef(null);

    const [isActive, setIsActive] = useState(false);

    const onClick = (e) => {
        console.log(e.target.id === "ws");
        if(e.target.id === "ws") setIsActive(!isActive);
    }

    // useEffect(() => {
    //     const pageClickEvent = (e) => {
    //         // console.log(e);
    //         // console.log(dropdownRef);
    //         console.log(dropdownRef.current);
            
    //         // if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)){
    //         //     setIsActive(!isActive);
    //         // }
    //     }
    //     if(isActive) window.addEventListener('click', pageClickEvent);

    //     //clean-up
    //     return() => window.removeEventListener('click', pageClickEvent);
        
    // }, [isActive]);

    return (
        <div className="dropdown">
            <button onClick={onClick} id="ws" className="nav-dropdown-btn">Workspaces <img className="arrow-icon" src="./pictures/down-arrow-icon.png"/></button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <div className="dropdown-title">Workspaces</div>
                <div className="dopdown-list">
                    <div className="dropdown-list-title">Current Workspaces</div>
                    <div className="dropdown-list-content">
                        <div className="dropdown-list-image">WTC</div>
                        <a href="#">Walk the Cat</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Workspace;