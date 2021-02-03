import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './Main.css';

//components
import Header from '../../Components/Header/Header';
import BottomNav from '../../Components/BottomNav/BottomNav';

//function 
import { fb } from '../../../control/firebase/firebase';
import { onAuth } from '../../../control/firebase/login';



export default function Main() {

  //the following section check if user login

  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {

    //save current path to session storage in case of ridirect
    let currentPath = location.pathname;
    sessionStorage.setItem('path', currentPath);

    onAuth(setUser);


  }, [])

  useEffect(() => {


    console.log(user)
    if (user) {

      //get user information from the DB
      //check his role in the system
      //check if the user is allowed in this page. if not, redirect to "unauthorized" screen
    }
  }, [user]);

  if (user) {
    return (

      <div className='main' >

        
        <h1>Main</h1>
      </div>
    )

  } else {
    return (<h1>unauthorized - go to login</h1>)
  }
}




