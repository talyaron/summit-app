import React from 'react';
import './BottomNav.css';
import {Link} from "react-router-dom";


let BottomNav = function () {
    return (
        <div className='nav'>
           <li> <Link to='/MainCourses'></Link> <div id = 'button1' className='nav__button' onClick> Chat </div> </li> 
           <li> <Link to='/MainCourses'></Link> <div id = 'button2' className='nav__button' onClick> All Courses </div> </li> 
           <li> <Link to='/Courses'></Link><div id = 'button3' className='nav__button' onClick> My Courses </div> </li> 
            
        </div>
    )
}


export default BottomNav;

