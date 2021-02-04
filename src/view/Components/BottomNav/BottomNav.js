import React from 'react';
import './BottomNav.css';
import {Link} from "react-router-dom";


let BottomNav = function () {
    return (
        <div className='nav'>
           
           <div> <Link to='/MainCourses'> <div id = 'button2' className='nav__button'> ALL COURSES </div> </Link> </div> 
           <div> <Link to='/MyCourses'><div id = 'button3' className='nav__button'> MY COURSES </div> </Link></div> 
            
        </div>
    )
}


export default BottomNav;

