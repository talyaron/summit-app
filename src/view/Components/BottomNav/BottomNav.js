import React from 'react';
import './BottomNav.css';
import {Link} from "react-router-dom";


let BottomNav = function () {
    return (
        <div className='nav'>
           <div> <Link to='/MainCourses'><div id = 'button1' className='nav__button'> Chat </div></Link>  </div> 
           <div> <Link to='/MainCourses'> <div id = 'button2' className='nav__button'> All Courses </div> </Link> </div> 
           <div> <Link to='/Profile'><div id = 'button3' className='nav__button'> My Courses </div> </Link></div> 
            
        </div>
    )
}


export default BottomNav;

