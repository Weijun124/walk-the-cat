import React from 'react';
import { Drawer } from 'antd'; 
import { useState } from 'react';

const Header = ( )=> {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    
    const onClose = () => {
        setVisible(false);
    };
  return (
   <>
    <header className='header'>
      <div className='container'>
        <div className='header-left'>
            <h1 className='header-logo header-text'>Kanban Board</h1>
            <span className='header-border-left'></span>
            <a className='header-btn'>
                <span className="header-icon"><i className="fa-solid fa-earth-asia"></i></span>
                <span className="header-text">Public</span>
            </a>
            <span className='header-border-left'></span>
            <a className='header-facepile'>
                <span className='header-member header-member-initials'>AH</span>
            </a>
        </div>
        <div className='header-left'>
            <span className='header-border-left'></span>
            <a className='header-btn'>
                <span className="header-icon"><i className="fa-solid fa-filter"></i></span>
                <span className="header-text">Filter</span>
            </a>    
            <a onClick={showDrawer} className='header-btn'>
                <span className="header-icon"><i className="fa-solid fa-ellipsis"></i></span>
                <span  className="header-text">Show menu</span>
            </a> 
        </div>
      </div>
    </header>
 </>
  );
};


export default Header;