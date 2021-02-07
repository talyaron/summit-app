import React from 'react';
import './BottomNav.css';
import {Link} from "react-router-dom";


let BottomNav = function () {
    return (
        <div className='nav'>
           
           <div> <Link to='/MainCourses'> <div id = 'button2' className='nav__button'> כל החוגים </div> </Link> </div> 
           <div> <Link to='/MyCourses'><div id = 'button3' className='nav__button'> החוגים שלי </div> </Link></div> 
            
        </div>
    )
}


export default BottomNav;

