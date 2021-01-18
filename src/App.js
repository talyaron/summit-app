import React, {useEffect, setState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//components
import Login from './view/Pages/Login/Login';
import Main from './view/Pages/Main/Main'
import HandleCourses from './view/Pages/HandleCourses/HandleCourses'
//functions
import {onAuth} from './control/firebase/login'

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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/adminCourses">
            <HandleCourses/>
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}