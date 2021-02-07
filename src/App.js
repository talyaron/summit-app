import React, { useEffect, setState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'




//components
import Login from './view/Pages/Login/Login';
import Main from './view/Pages/Main/Main'
import HandleCourses from './view/Pages/HandleCourses/HandleCourses';
import Profile from './view/Pages/Profile/Profile';
import Course from './view/Pages/Course/Course';
import MainCourses from './view/Pages/MainCourses/MainCourses';
import MyCourses from './view/Pages/MyCourses/MyCourses';
import BottomNav from './view/Components/BottomNav/BottomNav';
import Header from './view/Components/Header/Header';
import Calendar from "./view/Pages/Calendar/Calendar";




//functions
import { onAuth } from './control/firebase/login'
import SideNav from "./view/Components/SideNav/SideNav";

export default function App() {

  // const [user, setUser] = useState({})

  useEffect(() => {
    // onAuth()
    return () => {
      // cleanup
    }
  }, [])


  return (
    <Router>
      <div>
        <Header page='hello;' />
        {<nav>
          <ul>

            <li>
              <Link to="/Login">התחברות</Link>
            </li>
        
            <li>
              <Link to='/Profile'>חשבון</Link>
            </li>

            
    
    
          </ul>

        </nav>}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course/:courseId">
            <Course />
          </Route >
          <Route path="/adminCourses">
            <HandleCourses />
          </Route>
         
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/MyCourses">
            <MyCourses />
          </Route>

          <Route path="/MainCourses">
            <MainCourses />
          </Route>
          <Route path="/SideNav">
            <SideNav />
          </Route>
          
          <Route path="/Calendar">
            <Calendar />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <MyCourses />
          </Route>

        </Switch>
      </div>
      <BottomNav />
    </Router>



  );

}

