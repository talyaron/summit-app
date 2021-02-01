import React, {useEffect, setState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BottomNav from './view/Components/BottomNav/BottomNav'



//components
import Login from './view/Pages/Login/Login';
import Main from './view/Pages/Main/Main'
import HandleCourses from './view/Pages/HandleCourses/HandleCourses';
import Profile from './view/Pages/Profile/Profile';
import Course from './view/Pages/Course/Course';
import MainCourses from './view/Pages/MainCourses/MainCourses';



//functions
import {onAuth} from './control/firebase/login'
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
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          <li>
            <Link to='/adminCourses'>Courses</Link>
          </li>
          <li>
            <Link to='/Profile'>Profile</Link>
          </li>
          <li>
            <Link to='/MainCourses'>All Courses</Link>
          </li>
          <li>
            <Link to='/course/W3ZJrcJXEpIWHPBjohuh'>a course</Link>
          </li>
          
          <li>
            <Link to='/SideNav'>SideNav</Link>
          </li>
          </ul>

        </nav>

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
            <HandleCourses/>
          </Route>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/MainCourses">
            <MainCourses/>
          </Route>
          <Route path="/SideNav">
            <SideNav/>
          </Route>
        
        </Switch>
      </div>
      <BottomNav />
    </Router>
  
  
  
  );
  
}