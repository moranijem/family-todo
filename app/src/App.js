import React from "react";
import './App.css';
import  Register from './view/component/register/Register'
import Login from './view/component/login/Login'
import ToDo from './view/component/ToDo/ToDo'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/ToDo">ToDo</Link>
            </li>
            <li>
              <Link to="/Mission">Mission</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Login">
          <Login />
          </Route>
          <Route path="/ToDo">
            <ToDo />
          </Route>
          <Route path="/Mission">
            <Mission/>
          </Route>
          <Route path="/">
            <Register />
           </Route>
        </Switch>
      </div>
    </Router>
  );
}



// function Login() {
//   return <h2>Login</h2>;
// }

// function ToDo() {
//   return <h2>ToDo</h2>;
// }

function Mission() {
  return <h2>Mission</h2>;
}


// export default App;
