import React from 'react';
import './BottomNav.css';



let BottomNav = function () {
    return (
        <div className='Nav'>
        
            <button id = 'button1' onClick> Chat </button>
            <button id = 'button2' onClick> All Courses </button>
            <button id = 'button3' onClick> My Courses </button>
        </div>
    )
}


export default BottomNav;

