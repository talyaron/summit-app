import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import './Main.css';

//components
import Header from '../../Components/Header/Header';

//function 
import { fb } from '../../../control/firebase/firebase'



export default function Main() {

  //the following section check if user login

  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {

    //save current path to session storage in case of ridirect
    let currentPath = location.pathname;
    sessionStorage.setItem('path', currentPath);
    

    fb.auth().onAuthStateChanged(function (userDB) {
      if (userDB) {
        setUser(userDB);
        console.log('user loged in')
      } else {
        setUser({});
        console.log('user loged out')
      }
    });


  }, [])

  useEffect(() => {
    console.log(user)
    if (user) {
      //get user information 
      //check his role in the system
      //check if the user is allowed in this page. if not, redirect to "unauthorized" screen
    }
  }, [user])

  return (

    <div >
      <Header />
      <h1>Main</h1>
    </div>
  )
}




