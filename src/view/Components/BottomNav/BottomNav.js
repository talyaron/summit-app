import React from 'react';
import './BottomNav.css';



let BottomNav = function () {
    return (
        <div className='nav'>
        
            <div id = 'button1' className='nav__button' onClick> Chat </div>
            <div id = 'button2' className='nav__button' onClick> All Courses </div>
            <div id = 'button3' className='nav__button' onClick> My Courses </div>
        </div>
    )
}


export default BottomNav;

