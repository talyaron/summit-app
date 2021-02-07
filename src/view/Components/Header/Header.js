import React, { useState } from 'react'
import SideNav from '../../Components/SideNav/SideNav'
import './Header.css';

export default function Header(props) {

    const [showNav, setShowNav] = useState(false)


    function setShow(e){
        if(showNav === true){
            setShowNav(false);
        }else{
            setShowNav(true);
        }
    }

    return (
        <div className='all' >
        <div id="head">   מרכז סאמיט </div> 
            <button className = 'header_button' onClick = {setShow}>=</button>
            {showNav ? <SideNav /> : null}
        </div>
    )
}


